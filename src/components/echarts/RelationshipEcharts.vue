<template>
  <div id="mycharts" class="chartSet"></div>
  <div class="myTransfer" v-show="transferShow === true">
    <el-transfer
      filterable
      filter-placeholder="搜索关键词"
      :titles="['未选择节点', '已选择节点']"
      :props="{
        key: 'pawId',
        label: 'name',
      }"
      :data="transferData"
      v-model="choicePointData"
      @change="updateLinks"
    ></el-transfer>
  </div>
  <div id="fullScreen" class="fullScreenSet" v-show="chartShow === true"></div>
</template>



<script>
import * as echarts from "echarts";
import $ from "jquery";
import { createOption, relation } from "./data";

export default {
  data() {
    const getTransferData = (_) => {
      const data = [];
      for (let i = 0; i < relation.nodes.length; i++) {
        data.push({
          pawId: i,
          name: relation.nodes[i].name,
          // label: relation.nodes[i].des,
        });
      }
      return data;
    };

    return {
      // 原列表总数据
      transferData: getTransferData(),
      // right侧已包含数据列表
      choicePointData: [],
    };
  },

  // Transfer数据源的字段别名
  transferProps: {
    key: "pawId",
    label: "name",
  },

  mounted() {
    // 官方流程
    var myChart = echarts.init(document.getElementById("mycharts")); //  初始化实例对象
    let that = this;
    myChart.showLoading();
    myChart.hideLoading();

    relation.nodes.forEach(function (node) {
      node.label = {
        show: node.symbolSize > 20,
      };
    });

    const option = createOption(
      this.showTransfer.bind(this),
      this.showFullScreen.bind(this)
    );
    myChart.setOption(option);

    // 实现双击聚焦关系标签edgeLabel 变为input修改内容
    // getZr() params.setoffX
    this.initChart(myChart);
    // 实现滚动放大缩小时 关系线标签edgeLabel同步放大缩小
    // 如何复用到全屏中!!!

    //获取transfer框数据
    // this.getTransferData;
  },

  methods: {
    // 控制flag
    chartShow: false, // 全屏显示框显示Flag
    ChartScreen: null, // 全屏显示框内容
    transferShow: false, // 穿梭框显示Flag

    // toolbox工具 全屏放大方法
    showFullScreen(option) {
      // console.log(this.chartShow);
      if (this.chartShow === false) {
        $("#fullScreen").hide();
        this.ChartScreen = null;
        // console.log(this.chartShow);
        this.chartShow = true;
      } else {
        $("#fullScreen").show();
        this.ChartScreen = echarts.init(document.getElementById("fullScreen"));
        this.ChartScreen.setOption(option);
        this.initChart(this.ChartScreen);
        // console.log(this.chartShow);
        this.chartShow = false;
      }
    },

    showTransfer(option) {
      // console.log(option);
      if (this.transferShow === true) {
        $(".myTransfer").hide();

        this.transferShow = false;
      } else {
        $(".myTransfer").show();
        this.transferShow = true;
      }
    },

    initChart(chart) {
      let preZoom = 1;
      chart.getZr().on("mousewheel", function () {
        var option = chart.getOption();
        var zoom = option.series[0].zoom;
        if (zoom !== preZoom) {
          preZoom = zoom;
          var fontSize = zoom * 12;
          option.series[0].label.fontSize = fontSize;
          option.series[0].edgeLabel.textStyle.fontSize = fontSize;
          chart.setOption(option);
        }
      });

      // 判断点击的节点 传入到穿梭框函数中
      chart.on("click", (paw) => {
        this.choicePointData = []; // 清空数组
        //that.updateLinks(paw);
        if (paw.dataType === "node") {
          var index = paw.dataIndex; // 所点击节点的索引
          var selectPaw = paw.data.name;
          // console.log(paw.data.name);
          for (let i = 0; i < relation.links.length; i++) {
            if (relation.links[i].source === selectPaw) {
              // console.log(relation.links[i]);
              this.choicePointData.push(i);
              // {pawId:i,name:relation.nodes[i].target}
            }
          }
          console.log(this.choicePointData);
        }
        return this.choicePointData;
      });

      chart.getZr().on("click", (param) => {
        console.log(param.dataType);
        if (param.dataType === "edge") {
          console.log(param);
        }
      });
    },

    // 穿梭框修改jason数据Links
    updateLinks(paw) {
      if (paw.dataType === "node") {
        var index = paw.dataIndex; // 所点击节点的索引
        var selectPaw = paw.data.name;
        // console.log(paw.data.name);
        for (let i = 0; i < relation.links.length; i++) {
          if (relation.links[i].source === selectPaw) {
            console.log(relation.links[i]);
            that.choicePointData.push({
              key: i,
              label: relation.links[i].target,
            });
            // console.log(that.choicePointData);
          }
        }
      }
      return that.choicePointData;
    },

    // transfer数据获取方法
    // getTransferData() {
    //   // 我的请求总数据的接口
    //   getProjects()
    //     .then((res) => {
    //       this.transferData = res.nodes; // 全部服务

    //       this.choicePointData = res.channelId; // 自身所有服务,只能存放用于对应的key或者id
    //     })
    //     .catch((error) => {
    //       this.$message.error(error);
    //     });
    // },
  },
};
</script>

<style>
.chartSet {
  width: 100%;
  height: 90%;
  /* background-color: aqua; */
}

.myTransfer {
  width: 590px;
  height: 350px;
  position: fixed;
  bottom: 10px;
  left: 10px;
  margin: auto;
  margin-left: 10px;
  right: 0;
  border: 1px solid;
  z-index: 20;
}

.fullScreenSet {
  width: 95%;
  height: 85%;
  position: fixed !important;
  top: 70px;
  bottom: 0;
  left: 0;
  margin: auto;
  right: 0;
  border: 1px solid;
  background-color: rgba(255, 255, 255, 0.979);
  z-index: 10;
}
</style>