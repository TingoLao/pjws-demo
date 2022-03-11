<template>
  <div class="home_container">
    <el-container>
      <el-main>
        <h2>法务咨询</h2>
        <div class="board">
          <div class="advocates-box" v-for="n in 6" :key="n">
            <span class="lawyer-img">图标</span>
            <span class="lawyer-name">欧阳继华</span>
            <span id="lawyer-post">公益诉讼律师</span>
            <span
              >北京市中同律师事务所合伙人、副主任。从事法律服务工作19年，律师执业15年。擅长民商事诉讼与仲裁以及刑事辩护业务。</span
            >
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
  data() {
    return {
      infoShow: false, // 律师内容框显隐
    };
  },
  methods: {
    // 鼠标悬停展示内容框
    mouseOn() {
      this.infoShow = true
    },
    mouseOut() {
      this.infoShow = false
    },
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

.board {
  width: auto;
  height: 500px;
  margin: 50px 30px;
  padding: 5%;
  background-color: #e9ebecef;
  display: flex;
  position: inherit;
  justify-content: space-around;
  box-shadow: darkgrey 5px 5px 14px 5px; /* 阴影边框 */
  border-radius: 8px;
  flex-wrap: wrap;
}
.advocates-box {
  width: 110px;
  height: 140px;
  background: linear-gradient(
    180deg,
    rgba(237, 239, 245, 0.51),
    hsla(0, 0%, 100%, 0.186595)
  );
  box-shadow: -4px -4px 7px #fff, 4px 4px 6px rgb(0 0 0 / 5%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* 盒内 内容纵向摆布 */
  margin: 0 15px 0 15px;
  padding: 10px 6px 10px 5px;
}
</style>
