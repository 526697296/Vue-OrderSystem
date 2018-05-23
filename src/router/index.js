import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home.vue'
import Reg from '../components/Reg.vue'
import Menu from '../components/Menu.vue'
import About from '../components/about/About.vue'
import Login from '../components/Login.vue'
import Admin from '../components/Admin.vue'
// About二级路由
import Acontent from '../components/about/Acontent.vue'
import Adel from '../components/about/Adel.vue'
import Ahis from '../components/about/Ahis.vue'
import Aogu from '../components/about/Aogu.vue'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path:'*',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/reg',
      name:'Reg',
      component:Reg
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect:'/about/ahis',
      children:[
        {
          path:'/about/acontent',
          name:'acontent',
          component:Acontent
        },
        {
          path:'/about/adel',
          name:'adel',
          component:Adel
        },
        {
          path:'/about/ahis',
          name:'ahis',
          component:Ahis
        },
        {
          path:'/about/aogu',
          name:'aogu',
          component:Aogu
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
