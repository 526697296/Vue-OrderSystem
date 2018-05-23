// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store.js'
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://wd5259196195tskwvr.wilddogio.com/'

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  // const nextRoute = ['Home', 'Admin', 'Menu', 'About','acontent','adel','ahis','aogu'];
  let isLogin = store.state.isLogin;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  // if (nextRoute.indexOf(to.name) > 0) {  
    if (!isLogin) {
      if(to.path === '/login' || to.path === '/reg'){
      console.log('what fuck');
      next()
      // router.push({ name: 'Login' })
      // next('/login'||'/reg')
    }
    }
  // }
  // 已登录状态；当路由到login时，跳转至home 
  // if (to.name === 'Login') {
    if (isLogin) {
      next();
      // router.push({ name: 'Home' })
      // next();      
    }
  // }
  // next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
