<template>
  <div class="home_container">
    <el-container>
      <el-main>
        <h2>资料库</h2>
        <div class="board">
          <div class="documents"></div>
          <div class="documents"></div>
          <div class="documents"></div>
          dafhieh
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
