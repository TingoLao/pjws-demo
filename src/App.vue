<template>
  <div id="app">
    <el-container>
      <!-- 页眉内容 -->
      <el-header class="header">
        <h1 style="color: #f2f6fc; float: left">判决文书分析系统</h1>
        <div class="header-button">
          <router-link
            to="/home"
            type="text"
            style="
              font-size: 23px;
              color: #f2f6fc;
              font-weight: bold;
              text-align: right;
            "
          >
            首页
          </router-link>
          <el-button
            icon="el-icon-more"
            style="background:#333;rgb(248,250,251);"
          ></el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <LeftPanel />
        </el-aside>
        <!-- 左导航栏 和 主体-->
        <el-main style="display: flex; overflow: visible">
          <router-view />
        </el-main>
      </el-container>

      <!-- 页脚 -->
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
  <div class="pos-buttom"></div>
</template>

<script>
import { defineComponent } from "vue";
import LeftPanel from "@/components/LeftPanel.vue"; // 侧导航栏
import Footer from "@/components/Footer.vue"; // 页脚
import Home from "./views/Home/home.vue";
const Archives = () => import("@/views/Archives/archives.vue"); // 档案库模块
const LegalConsultation = () =>
  import("@/views/LegalConsultation/legalConsultation.vue"); // 法务咨询模块
const RelationshipChart = () =>
  import("@/views/RelationshipChart/relationshipChart.vue"); // 关系图网模块
const RelevantLaws = () => import("@/views/RelevantLaws/relevantLaws.vue"); // 相关法条模块
const LexicalAnalysis = () => import("@/views/LexicalAnalysis/lexicalAnalysis.vue"); // 词法分析模块
const InformationExtraction = () =>
  import("@/views/InformationExtraction/informationExtraction.vue"); // 信息提取模块
const CaseReasoning = () => import("@/views/CaseReasoning/caseReasoning.vue"); // 案情推理模块

export default defineComponent({
  name: "App",
  components: {
    LeftPanel,
    Footer,
    Home,
    Archives,
    RelationshipChart,
    InformationExtraction,
    CaseReasoning,
    LegalConsultation,
    LexicalAnalysis,
    RelevantLaws,
  },
  setup() {},
});
</script>



<style>
.header {
  font-weight: bold;
  color: #333;
  text-align: right;
  height: 70px !important;
  box-shadow: 0 0 10px #ccc;
  position: sticky;
  top: 0;
  margin-bottom: 50px;
  width: 100%;
  z-index: 999;
  background-color: rgba(17, 15, 15, 0.863);
}

.header-button {
  height: 60px;
  width: 200px;
  float: right;
  margin: 12px 20px 0 20px;
  font-size: 24px;
  /* vertical-align: middle; */
  text-decoration: none;
}

a {
  text-decoration: none;
  vertical-align: middle;
}

h2 {
  font-weight: bold;
  font-size: 32px;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
}
</style>
