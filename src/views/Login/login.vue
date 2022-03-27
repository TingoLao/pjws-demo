<template >
  <div class="container animated bounceInLeft" id="container1">
    <div class="box">
      <div class="boxChi">
        <el-form label-width="80px" ref="formRef" :rules="rules" :model="formLabelAlign">
          <el-form-item label="账号" prop="username">
            <el-input v-model="formLabelAlign.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input v-model="formLabelAlign.password"></el-input>
          </el-form-item>
          <el-form-item prop="code" label="验证码">
            <el-input class="codeInput" @keyup.enter="loginFun" v-model="formLabelAlign.code"></el-input>
            <span @click="getCaptchaCode('aaa','bbb','ccc')" class="codeSpan" v-html="code"></span>
          </el-form-item>
        </el-form>
        <el-button type="success" @click="loginFun">登录</el-button>
        <img :src="a" alt="图片加载失败" />
      </div>
    </div>
  </div>
</template>
<script>
import stopUpDownFunList from "@/stopUpDown.js";
import { useRouter, useRoute } from "vue-router";
//this.$router.push()
import particlesJs from "@/particles.js";
import axios from "@/axios";
// import axios from "axios";
import { ElMessage } from "element-plus";
import { reactive, ref, onMounted } from "vue";
export default {
  setup(props) {
    let router = useRouter();
    // let route = useRoute();
    // route.query.xxx
    const validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    const formLabelAlign = reactive({
      username: "",
      password: "",
      code: ""
    });
    let formRef = ref(null);
    let code = ref(null);
    let imgg = reactive(0);
    onMounted(() => {
      particlesJs("container1", {
        particles: {
          color: "#1e56bd",
          shape: "circle", // "circle", "edge" or "triangle"
          opacity: 0.5,
          size: 5,
          size_random: true,
          nb: 80,
          line_linked: {
            enable_auto: true,
            distance: 200,
            color: "#1e56bd",
            opacity: 1,
            width: 1,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          anim: {
            enable: true,
            speed: 5
          }
        },
        interactivity: {
          enable: false,
          mouse: {
            distance: 100
          },
          detect_on: "canvas", // "canvas" or "window"
          mode: "grab",
          line_linked: {
            opacity: 0.5
          },
          events: {
            onclick: {
              enable: true,
              mode: "push", // "push" or "remove"
              nb: 4
            }
          }
        },
        /* Retina Display Support */
        retina_detect: true
      });
      localStorage.clear();
      getCaptchaCode();
    });
    const a = ref(null);
    const stopUpDownFun = stopUpDownFunList();
    const getCaptchaCode = (...arrAgu) => {
      stopUpDownFun((...data) => {
        // console.log('%c下面是传递过来的参数','color:red');
        // console.log(...data);
        // //...业务逻辑
        //   axios.get('images/0df7f084788cc336e5fb2b2b4e708ed8bgc.jpg',{responseType: 'arraybuffer'}).then(res=>{
        //     console.log(res,'123');
        // const imgg =  `data: image/jpeg;base64,${btoa(new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;
        //  console.log(imgg);

        //  })
        axios
          .getTIP(
            "http://localhost:3003/images/0df7f084788cc336e5fb2b2b4e708ed8bgc.jpg"
          )
          .then(response => {
            //  console.log('response',response);
            // new Buffer(response).toString("base64");

            return (
              "data:image/png;base64," +
              btoa(
                new Uint8Array(response).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )
            );
          })
          .then(data => {
            //  console.log(data);
          });

        //   axios.getTIP("http://20cd56a5bfaf.ngrok.io/aa",).then(res => {
        //   // axios.getTIP("http://zwfwtest.ccbft.com:8039/gsp/uc90001?vcode=666&vcodeId=888",).then(res => {
        //    console.log(res,888);
        //     return (
        //      "data:image/png;base64," +
        //      btoa(
        //        new Uint8Array(res).reduce(
        //          (data, byte) => data + String.fromCharCode(byte),
        //          ""
        //        )
        //      )
        //    );
        //  })
        //  .then(data => {
        //    console.log(data);
        //    a.value = data
        //  });

        axios.get("getCaptchaCode").then(res => {
          res.code === "200" && (code.value = res.data.code);
          ElMessage.success({
            message: "验证码获取成功",
            type: "success"
          });
          localStorage.setItem("token", res.data.token);
        });
      }, ...arrAgu);
    };

    const loginFun = () => {
      formRef.value.validate(valid => {
        if (valid) {
          axios.get("login", formLabelAlign).then(res => {
            res.code === "200" &&
              ElMessage.success({
                message: res.data.data,
                type: "success"
              });
            if (res.data.code == 1) {
              localStorage.setItem("username", formLabelAlign.username);
              localStorage.setItem("uuid", res.data.uuidStr);
              localStorage.setItem("token", res.data.token);
              router.push("/home/userlist");
            }
          });
        } else {
          // alert("请填写必填信息");
          return false;
        }
      });
    };
    const rules = {
      username: [{ validator: validateUsername, trigger: "blur" }],
      password: [{ validator: validatePassword, trigger: "blur" }],
      code: [{ validator: validateCode, trigger: "blur" }]
    };
    return {
      formLabelAlign,
      formRef,
      rules,
      loginFun,
      code,
      getCaptchaCode,
      imgg,
      a
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("@img/login.jpg");
  .box {
    width: 500px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 10%;
    top: 26%;
    .boxChi {
      width: 80%;
      height: 80%;
      margin: 10% auto;
      /deep/.el-form-item__label {
        font-weight: bold;
      }
      /deep/.codeInput {
        width: 60%;
      }
      .codeSpan {
        float: right;
      }
    }
  }
}
</style>