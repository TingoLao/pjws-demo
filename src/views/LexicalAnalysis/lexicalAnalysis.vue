<template>
  <div class="home_container">
    <el-container>
      <el-main>
        <h2>词法分析(暂时) 尝试模块</h2>
        <div class="board">
          <div class="container">
            <div class="plant_panel">名片显示区域</div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";

defineComponent;
export default defineComponent({
  name: "App",
  setup() {},
});
</script>


<style scoped>
/* 名片模块样式暂借区域 */

.plant_panel {
  width: 940px;
  height: 540px;
  background-color: aliceblue;
}

/*  */
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

.board {
  width: auto;
  height: 700px;
  margin: 50px 30px;
  padding: 5%;
  background-color: #e9ebecef;
  display: flex;
  position: inherit;
  justify-content: center;
  box-shadow: darkgrey 5px 5px 14px 5px; /* 阴影边框 */
  border-radius: 8px;
}
</style>
