import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   //自动寻找 目录router下的index.js文件
import store from './store'

import '@/assets/icon/iconfont.css' // 引入阿里icon

// 引入axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// .use(VueAxios,axios)


//Vue.config.productionTip = false    //可有可无
// import 'vant/lib/button/style';
// import Vant from 'vant'
// import 'vant/lib/index.css'
// 配置请求路径

// 使用ElementUi
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import axios from 'axios'

axios.get('api/api/relation')


//cli3.0 写法
// new Vue({
//     render: h => h(App),
//     router, //routerrouter,的简写
//     store,
// }).$mount('#app')

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
