<template>
  <div class="home_container">
    <el-container>
      <el-main>
        <h2>案情推理</h2>
        <el-container class="textarea">
          <div class="text_panel">
            <div class="text_content">
              公诉机关指控：2014年6月11日10时许，被告人李某驾车行至本市侨乡经济开发区友谊村3组“昌盛物流”公司门前时，因车辆堵塞之事与郭某发生纠纷。当日16时许，被告人李某驾车再次来到该处，与郭某发
              生争执，在争执过程中将郭某打伤。经天门市公安司法鉴定中心鉴定，郭某多处软组织损伤，右侧鼻骨粉碎性骨折，损伤程度为轻伤二级。
              2015年2月16日，经天门市公安局侯口派出所主持调解，被告人李某近亲属与被害人郭某自愿达成调解协议，并按协议赔偿了被害人郭某各项经济损失共计37000元。被害人郭某对被告人李某表示谅解。
            </div>
          </div>
          <div>
            <button>开始分析</button>
            <button>导入文书</button>
          </div>
        </el-container>
        <el-container class="report">
          <h3 class="title_report">案情时间线</h3>
          <div class="timeLine_panel">
            <div id="main" class="chartSet">
              <TimeLine></TimeLine>
            </div>
          </div>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import { defineComponent } from "vue";
import TimeLine from "@/components/timeLine/TimeLine.vue";

defineComponent;
export default defineComponent({
  name: "App",
  components: { TimeLine },
  data() {
    return {
      openAccountProcessLoading: true,
    };
  },
});
</script>




<style scoped>
.home_container {
  min-width: 200px;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

h2 {
  font-weight: bold;
  font-size: 32px;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
}

button {
  float: right;
  margin-right: 30px;
  width: 140px;
  height: 45px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

.textarea {
  width: 100%;
  display: inline-block;
}

.text_panel {
  width: auto;
  height: 250px;
  margin: 30px;
  background-color: #ffff;
  display: flex;
  position: inherit;
  justify-content: center;
  box-shadow: darkgrey 1px 1px 5px 1px; /* 阴影边框 */
  border-radius: 8px;
}

.text_content {
  width: 90%;
  height: 80%;
  background-color: #ffff;
  align-self: center;
  margin: 20px 0 20px 0;
  border-radius: 10px;
  border: 1px solid #cccccc; /* 边框 */
  padding: 8px;
  font-size: 24px;
  text-indent: 2em;
  word-wrap: break-word; /* 文本自动换行 */
  overflow: auto; /* 文本超出部分使用滚动条 */
}

.report {
  width: 100%;
  display: inline-block;
}

.title_report {
  margin-left: 35px;
  color: #253a57;
  font-size: 25px;
  font-weight: bold;
}

.timeLine_panel {
  width: auto;
  min-height: 500px;
  margin: 50px 30px;
  padding: 1% 5%;
  background-color: #ffff;

  position: inherit;
  justify-content: center;
  box-shadow: darkgrey 1px 1px 5px 1px; /* 阴影边框 */
  border-radius: 8px;
}

.chartSet {
  width: 100%;
  height: 90%;
  background-color: #ffff;
  padding-top: 20px;
}
</style>
