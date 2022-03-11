<template>
  <div class="home_container">
    <el-container>
      <el-container>
        <el-main>
          <h2>功能模块</h2>
          <el-row :gutter="60">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="module-title">
                  <i class="el-icon-tickets" id="icon-set"></i>
                  <en class="module-items">词法分析</en>
                </div>
                <div class="module-description">
                  提供了分词、词性标注、命名实体识别三大功能。帮助法律领域语言的理解。
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="module-title">
                  <i class="el-icon-files" id="icon-set"></i>
                  <en class="module-items">信息抽取</en>
                </div>
                <div class="module-description">
                  从判决文书中抽取多种结构树，多角度展现文书内容。
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="60">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="module-title">
                  <i class="el-icon-search" id="icon-set"></i>
                  <en class="module-items">案情推理</en>
                </div>
                <div class="module-description">
                  对案情事件文段中的情节要素进行提取，再对信息进行排序梳理生成时间线图。
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="module-title">
                  <i class="el-icon-attract" id="icon-set"></i>
                  <en class="module-items">关系图网</en>
                </div>
                <div class="module-description">
                  从判决文书中抽取人物关系，结合人物信息，构成关系网图谱。
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="60">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="module-title">
                  <i class="el-icon-s-management" id="icon-set"></i>
                  <en class="module-items">相关法条</en>
                </div>
                <div class="module-description">
                  通过关键词抽取判决文书中所引用的法条，进行搜索提取，罗列相关法律法规。
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="module-title">
                  <i class="el-icon-s-comment" id="icon-set"></i>
                  <en class="module-items">法务咨询</en>
                </div>
                <div class="module-description">专业律师，在线解答。</div>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {},
});
</script>


<style scoped>
.home_container {
  min-width: 200px;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

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
}

h2 {
  font-weight: bold;
  font-size: 32px;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
}

/* LeftNav */
.el-menu-item {
  padding: 0 !important;
  /* padding-left : 45px !important; */
  text-align: center;
  background-color: rgb(27, 32, 46);
  color: aliceblue;
}

.el-menu-item.is-active {
  /* content: "";
  display: block;F
  float: left; */
  border-left: 6px solid #0975e0;
}

/* 模块框 */
.el-row {
  margin: 0 0 50px 0 !important;
  justify-content: center;
  width: 100%;
}
.el-col {
  border-radius: 4px;
  max-width: 40%;
}
.el-col-6 {
  flex: 0 0 40%;
}
/* 内容样式设定 */
.bg-purple-dark {
  background: #1b74f0;
}
.bg-purple {
  background: #e9ebecef;
  height: 100%;
  font-size: 22px; /* 模块框内文本字号 */
  padding: 15px;
  box-shadow: darkgrey 5px 5px 14px 5px; /* 阴影边框 */
}
#icon-set {
  font-size: 35px;
  color: #09467d;
  vertical-align: middle;
}
.module-title {
  padding-left: 15px;
  margin-bottom: 10px;
}
.module-items {
  font-weight: bold;
  font-size: 22px;
  padding-left: 20px;
}
.module-description {
  text-indent: 2em;
}
.bg-purple-light {
  background: #21f556;
  /* #e5e9f2  临时测试颜色*/
}
.grid-content {
  border-radius: 8px;
  min-height: 36px;
}
.row-bg {
  /* padding: 10px 0; */
  background-color: #21f556;
  /* #f9fafc * 临时测试颜色 */
}
</style>
