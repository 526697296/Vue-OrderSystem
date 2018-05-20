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
// import Con from '../components/about/Con.vue'
// import Del from '../components/about/Del.vue'
// import His from '../components/about/His.vue'
// import Ogu from '../components/about/Ogu.vue'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path:'*',
      redirect: '/home'
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
      // redirect:'/about/his',
      // children:[
      //   {
      //     path:'/about/con',
      //     name:'conlink',
      //     component:Con
      //   },
      //   {
      //     path:'/about/del',
      //     name:'dellink',
      //     component:Del
      //   },
      //   {
      //     path:'/about/his',
      //     name:'hislink',
      //     component:His
      //   },
      //   {
      //     path:'/about/ogu',
      //     name:'ogulink',
      //     component:Ogu
      //   }
      // ]
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
