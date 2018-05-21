<template>
  <div id="about">
    <div class="row mb-5">
      <!-- about下面四个导航 -->
      <div class="col-4">
        <div class="list-group mb-5">
          <router-link tag="div" class="nav-link" :to="{name:'hislink'}" exact>
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
          <router-link tag="div" class="nav-link" :to="{name:'conlink'}" exact>
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="div" class="nav-link" :to="{name:'ogulink'}" exact>
            <a class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link tag="div" class="nav-link" :to="{name:'dellink'}" exact>
            <a class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
        </div>
      </div>
      <!-- about二级路由展示区 -->
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data(){
    return{
    }
  },
  components:{
  }
}
</script>
<style scoped>
</style>
