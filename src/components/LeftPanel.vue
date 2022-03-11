<template>
  <el-menu :default-active="$route.path" router style="height: 100%">
    <el-menu-item index="/Archives">
      <i class="el-icon-menu"></i>
      <span slot="title">司法文书库</span>
    </el-menu-item>
    <el-menu-item index="/LexicalAnalysis">
      <i class="el-icon-menu"></i>
      <span slot="title">词法分析</span>
    </el-menu-item>
    <el-menu-item index="/InformationExtraction">
      <i class="el-icon-menu"></i>
      <span slot="title">信息抽取</span>
    </el-menu-item>
    <el-menu-item index="/CaseReasoning">
      <i class="el-icon-menu"></i>
      <span slot="title">案情推理</span>
    </el-menu-item>
    <el-menu-item index="/RelationshipChart">
      <i class="el-icon-menu"></i>
      <span slot="title">关系图网</span>
    </el-menu-item>
    <el-menu-item index="/RelevantLaws">
      <i class="el-icon-menu"></i>
      <span slot="title">相关法条</span>
    </el-menu-item>
    <el-menu-item index="/LegalConsultation">
      <i class="el-icon-menu"></i>
      <span slot="title">法务咨询</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
//import { getUserInfo } from '@/api/user/user'
// export default {
//   name: "home",
//   data() {
//     return {
//       userinfo: {},
//     };
//   },
//   created() {
//     this.getUserInfo();
//   },
//   computed: {
//     loginType() {
//       return this.$store.state.userInfo.loginType;
//     },
//   },
//   methods: {
//     getUserInfo() {
//       getUserInfo().then(({ code, data, msg }) => {
//         console.log(data);
//         if (code === 200) {
//           this.userinfo = data;
//         } else this.$message.error("获取个人信息失败：" + msg);
//       });
//     },
//   },
// };
</script>

<style scoped>
.el-aside {
  min-height: 140vh;
}

.el-menu-item {
  padding: 0 !important;
  /* padding-left : 45px !important; */
  text-align: center;
  font-size: 18px;
  font-weight: 400;
}

.el-menu-item.is-active {
  /* content: "";
  display: block;
  float: left; */
  border-right: 8px solid #0975e0;
}
#userInfo {
  height: auto;
  margin-top: 49px;
  padding: 10px 0 !important;
  text-align: center;
}

#userInfo img {
  cursor: pointer;
}
</style>