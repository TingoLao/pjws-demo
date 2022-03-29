<template>
  <!-- 画布 -->
  <div id="mycharts" class="chartSet"></div>

  <!-- 穿梭框 -->
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

  <!-- 节点添加框 -->

  <div class="myAddNode" v-show="addNodeShow === true">
    <span>添加节点内容</span>
    <el-input
      class="addNode_inputBox"
      placeholder="新节点的名称"
      v-model="inputArr.newNode"
    ></el-input>
    <el-input
      class="addNode_inputBox"
      placeholder="新节点的描述"
      v-model="inputArr.des"
    ></el-input>
    <el-autocomplete
      class="addNode_inputBox"
      placeholder="请输入节点类别"
      v-model="this.inputArr.categories"
      :fetch-suggestions="querySearch"
      @select="handleSelect"
    ></el-autocomplete>
    <el-button class="addNode_btn" @click="addNode">添加</el-button>
  </div>

  <!-- 全屏画布 -->
  <div id="fullScreen" class="fullScreenSet" v-show="chartShow === true"></div>

  <!-- 关系标签修改框 -->
  <div id="edgeEdict" v-show="edgeEdictShow">
    <el-input placeholder="新的关系"></el-input>
    <el-button>确认</el-button>
  </div>
</template>



<script>
import * as echarts from "echarts";
import $ from "jquery";
import { relation } from "./data";
import { createOption } from "./setOption";
import { nextTick } from "vue";
let myChart = null;
export default {
  data() {
    // 获取当前点击节点的links传入穿梭框 （未完成）
    const getTransferData = (_) => {
      const data = [];
      for (let i = 0; i < relation.nodes.length; i++) {
        data.push({
          pawId: i,
          name: relation.nodes[i].name,
          // label: relation.nodes[i].des,
        });
      }
      // console.log(data);
      return data;
    };

    return {
      // 原列表总数据
      transferData: getTransferData(),

      // 穿梭框right侧已包含数据列表
      choicePointData: [],

      // 节点增加框输入内容
      inputArr: { newNode: "", des: "", categories: "" },

      // 添加节点内容框 节点类别建议数组
      inputSort: [],

      // 被选中添加的父节点
      selecedNode: [],

      // 被选中删除节点的索引
      selectedIndex: [],
    };
  },

  // Transfer数据源的字段别名
  transferProps: {
    key: "pawId",
    label: "name",
  },
  mounted() {
    // 官方流程
    myChart = echarts.init(document.getElementById("mycharts")); //  初始化实例对象
    let that = this;
    myChart.showLoading();
    myChart.hideLoading();

    // 不显示问题
    // relation.nodes.forEach(function (node) {
    //   console.log(2222);
    //   node.label = {
    //     show: node.symbolSize > 20,
    //   };
    // });

    const option = createOption(
      this.showTransfer.bind(this),
      this.showFullScreen.bind(this),
      this.showAddNode.bind(this)
    );

    myChart.setOption(option);

    myChart.on("click", (params) => {
      this.selecedNode = params.name;
      // console.log(this.selecedNode);
    });

    // 需求：
    // 实现双击聚焦关系标签edgeLabel 变为input输入框修改内容

    myChart.on("dblclick", (param) => {
      console.log(param);
    });

    // getZr() params.setoffX
    this.initChart(myChart);

    // 实现滚动放大缩小时 关系线标签edgeLabel同步放大缩小 已完成
    // 如何复用到全屏中!!! 已完成

    this.inputSort = this.loadAll();
  },

  methods: {
    // 控制flag
    chartShow: false, // 全屏显示框显示Flag
    ChartScreen: null, // 全屏显示框内容
    transferShow: false, // 穿梭框显示Flag
    edgeEdictShow: false, // 关系标签显隐Flag
    addNodeShow: false, // 节点增加功能框Flag

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

    // 增加节点的面板显影控制
    showAddNode() {
      if (this.addNodeShow === true) {
        $(".myAddNode").hide();

        this.addNodeShow = false;
        // console.log(option);
      } else {
        $(".myAddNode").show();
        this.addNodeShow = true;
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
          // console.log(paw.links);
          for (let i = 0; i < relation.links.length; i++) {
            if (relation.links[i].source === selectPaw) {
              // console.log(relation.links[i]);
              this.choicePointData.push(i);
              // {pawId:i,name:relation.nodes[i].target}
            }
          }
          // console.log(this.choicePointData);
        }
        return this.choicePointData;
      });

      // 判断点击的关系线
      chart.on("dblclick", (param) => {
        // console.log(param);
        // console.log(param.dataType);
        if (param.dataType === "edge") {
          console.log("111");
          var x = param.event.offsetX;
          var y = param.event.offsetY;
          var divPosi = document.getElementById("#edgeEdict");
          $("#edgeEdict").show().css({ position: 'absolute', left: x, top: y });
        }
      });

      myChart.on("click", (params) => {
        this.selecedNode = params.name;
        this.selectedIndex = params.dataIndex;
        console.log(params.dataIndex);
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
            // console.log(relation.links[i]);
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

    // 增删加节点功能

    // 面板方法
    querySearch(queryString, cb) {
      var sorts = this.inputSort;
      var results = queryString
        ? sorts.filter(this.createFilter(queryString))
        : sorts;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (sort) => {
        return (
          sort.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { value: "正方", category: 0 },
        { value: "反派", category: 1 },
        { value: "关键线索人物", category: 2 },
        { value: "配角", category: 3 },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },

    // 增加节点
    // addNode() {
    //   // 增加节点功能
    //   console.log(this.inputArr.newNode);
    //   if (this.inputArr.newNode != null) {
    //     relation.nodes.push({
    //       name: this.inputArr.newNode,
    //       des: this.inputArr.des,
    //       symbolSize: 20,
    //       category: 1,
    //     });
    //     relation.links.push({
    //       source: "高小凤",
    //       target: this.inputArr.newNode,
    //       name: "师生",
    //       des: this.inputArr.des,
    //     });

    //     // 添加数据后重新渲染关系图

    //     this.option = createOption({
    //       series: [
    //         {
    //           data: relation.nodes,
    //           links: relation.links,
    //         },
    //       ],
    //     });
    //     console.log(relation.nodes);
    //   }
    // },

    // test

    addNode(chart) {
      // 增加节点功能
      console.log(chart);
      if (this.inputArr.newNode != null && this.selecedNode != null) {
        relation.nodes.push({
          name: this.inputArr.newNode,
          des: this.inputArr.des,
          symbolSize: 20,
          category: this.inputArr.categories,
        });
        relation.links.push({
          source: this.inputArr.newNode,
          target: this.selecedNode,
          name: "未定义",
          des: this.inputArr.des,
        });

        // console.log(relation.links);
        this.selecedNode = null; // 清空选中节点

        // 重新渲染
        myChart.setOption({
          series: [
            {
              data: relation.nodes,
              links: relation.links,
            },
          ],
        });
      } else if (this.selecedNode == null) {
        alert("未选择节点");
      }
    },

    // 删除节点
    deleteNode() {
      console.log(111);
      if (this.selecedNode != null) {
        var selectedIndex = this.selectedIndex;
        relation.nodes.splice(selectedIndex, 1);
        this.selectedIndex = null;
        console.log(relation.nodes);

        // 重新渲染
        myChart.setOption({
          series: [
            {
              data: relation.nodes,
              links: relation.links,
            },
          ],
        });
      }
    },
  },
};
</script>

<style>
.chartSet {
  position: relative;
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

/* 编辑关系标签输入框 */
#edgeEdict {
  width: 60px;
  height: 15px;
  border: 1px solid;
  flex-direction: row;
  background-color: rgba(243, 243, 243, 0.863);
  z-index: 22;
}

/* 添加节点框样式 */
.myAddNode {
  width: 240px;
  height: 300px;
  position: fixed;
  display: grid;
  justify-items: center;
  bottom: 40px;
  left: 20%;
  margin: auto;
  margin-left: 10px;
  right: 0;
  border: 1px solid;
  z-index: 21;
  background-color: rgba(145, 145, 145, 0.863);
}

.addNode_inputBox {
  width: 150px;
}

.addNode_btn {
  width: 80px;
}
</style>