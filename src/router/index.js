import { createRouter, createWebHashHistory, createWebHistory, useRouter } from 'vue-router'
//import VueRouter from 'vue-router'
//import Vue from 'vue' cli3.0 写法

//Step1 安装插件 把Router挂载到Vue上
//Vue.use(Router)
//Vue.use(VueRouter) ——————cli3.0 写法

const Login = () => import('@/views/Login/login')
const Home = () => import('@/views/Home/home.vue')
//import Home from '../views/Home/home.vue'
const Archives = () => import('@/views/Archives/archives.vue')    //档案库模块
const LegalConsultation = () => import('@/views/LegalConsultation/legalConsultation.vue')   //法务咨询模块
const RelationshipChart = () => import('@/views/RelationshipChart/relationshipChart.vue')   //关系图网模块
const RelevantLaws = () => import('@/views/RelevantLaws/relevantLaws.vue')                  //相关法条模块
const LexicalAnalysis = () => import('@/views/LexicalAnalysis/lexicalAnalysis.vue')         //词法分析模块
const InformationExtraction = () => import('@/views/InformationExtraction/informationExtraction.vue')   //信息提取模块
const CaseReasoning = () => import('@/views/CaseReasoning/caseReasoning.vue')               //案情推理模块

//Step2 创建VueRouter对象
//创建路由对象并配置路由规则
//const routes = [...]

const router = createRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [

      ],
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/',
      //Component: ErrorPage,
      redirect: "/home",    //添加跳转回首页
      meta: { title: "oh，似乎发生了一些错误呢" }
    },
    //各个模块路由
    {
      path: '/archives',
      name: 'Archives',
      component: Archives,
      meta: {
        title: '文书档案室'
      }
    },
    {
      path: '/lexicalAnalysis',
      name: 'LexicalAnalysis',
      component: LexicalAnalysis,
      meta: {
        title: '词法分析'
      }
    },
    {
      path: '/informationExtraction',
      name: 'InformationExtraction',
      component: InformationExtraction,
      meta: {
        title: '信息提取'
      }
    },
    {
      path: '/caseReasoning',
      name: 'CaseReasoning',
      component: CaseReasoning,
      meta: {
        title: '案情推理'
      }
    },
    {
      path: '/legalConsultation',
      name: 'LegalConsultation',
      component: LegalConsultation,
      meta: {
        title: '法务咨询'
      }
    },
    {
      path: '/relationshipChart',
      name: 'RelationshipChart',
      component: RelationshipChart,
      meta: {
        title: '关系图网'
      }
    },
    {
      path: '/relevantLaws',
      name: 'RelevantLaws',
      component: RelevantLaws,
      meta: {
        title: '相关法条'
      }
    },
  ],
  history: createWebHashHistory()
})

//Step3 将router对象导入vue实例
export default router; //暴露路由
