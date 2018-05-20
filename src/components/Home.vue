<template>
  <div class="home">
    <div class="row">
      <div class="homes text-center col-sm-12">
        <div class="background">
          <h1>欢迎来到ZHOUJH点餐系统。</h1>
          <button @click="gotoMenu" class="btn btn-success">进入系统</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  components:{ 
  },
  methods:{
    gotoMenu(){
    }
  }
}
</script>
<style scoped>
  .home{
    margin-top: 6px;
  }
  .homes{
    background: url('../../src/assets/bg.jpg') no-repeat;
    height:85vh;
  }
  .background{
    margin-top: 100px;
  }
</style>
