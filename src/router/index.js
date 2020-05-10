import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Readme from '../components/Readme.vue'
Vue.use(VueRouter)

  const routes = [
    {path:'/',redirect:'/login'},  
    {path:'/login',component:Login},
    {path:'/readme',component:Readme}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
