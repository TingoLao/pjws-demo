<template>
  <el-footer>
    <div class="container">
      <div >
        <span class="fontFamily alicon-location" id="logo" style="background-color: #333"></span>
        LOGO图标</div>
      <div id="contactway">
        <span id="list-title">联系方式</span>
        <div class="list-content">
          <span class="fontFamily alicon-phone"></span>
          <span>13267999640</span>
        </div>
        <div class="list-content">
          <span class="fontFamily alicon-mail"></span>
          <span>1801030057@mail.bnuz.edu.cn</span>
        </div>
        <div class="list-content">
          <span class="fontFamily alicon-location"></span>
          <span>广东省珠海市高新区金凤路48号北京师范大学(珠海分校)</span>
        </div>
      </div>
      <div id="contact-wechat">
        <div class="codeImagbox">
          <img class="img" />
        </div>

        <span id="note">微信二维码</span>
      </div>
    </div>

    <!-- 分割线 -->
    <div id="diliverLong"></div>
    <div id="note">
      <span>本网站仅用于毕业论文项目的实验设计</span>
    </div>
  </el-footer>
</template>

<script>
</script>


<style scoped>
.el-footer {
  width: 100%;
  min-height: 380px;
  background-color: #f2f5f8;
  font-size: 18px;
  display: flex;
  margin-top: 10px;
  padding: 70px 12% 16px;
  flex-direction: column;
}
.container {
  display: flex;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: space-between;
}
#icon-set {
  height: 20px;
  width: 20px;
}
#list-title {
  font-weight: 600;
}
.fontFamily{
  margin-right: 10px;
}
.list-content {
  margin-top: 20px;
  color: #666;
  /* font-size: 14px; */
  line-height: 24px;
}

#contact-wechat {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.codeImagbox {
  width: 110px;
  height: 110px;
  background: linear-gradient(
    180deg,
    rgba(237, 239, 245, 0.51),
    hsla(0, 0%, 100%, 0.186595)
  );
  box-shadow: -4px -4px 7px #fff, 4px 4px 6px rgb(0 0 0 / 5%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  width: 90%;
}

#diliverLong {
  height: 1px;
  width: 100%;
  background-color: #ccc;
  margin-bottom: 15px;
  margin-top: 40px;
}
#note {
  margin-top: 15px;
  color: #666;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align-last: center;
}
</style>