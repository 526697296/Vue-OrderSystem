<template>
<div class="header">
  <nav class="navbar navbar-expand-lg navbar-light bg-light container">
  <a class="navbar-brand">点餐系统</a>
  <ul class="navbar-nav mr-auto">
    <li>
      <router-link to="/home" class="nav-link" exact>系统主页</router-link> 
    </li>
    <li>
      <router-link to="/menu" class="nav-link" exact>菜单详情</router-link> 
    </li>
    <li>
      <router-link to="/admin" class="nav-link" exact>菜单管理</router-link>
    </li>
    <li>
      <router-link to="/about" class="nav-link">关于我们</router-link>
    </li>
  </ul>
  <ul class="navbar-nav ml-auto">
    <li>
      <router-link to="/login" class="nav-link" exact>欢迎登入</router-link>
    </li>
    <li>
      <router-link to="/reg" class="nav-link" exact>欢迎注册</router-link>
    </li>
  </ul>
</nav>
</div>    
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style scoped>
  .router-link-active{
    display: block;
    background: #F0F1F2;
    border-radius: 6px;
  }
  .mr-auto .nav-link{
    margin-right: 10px;
  }
  .ml-auto .nav-link{
    margin-left: 10px;
  }
</style>
