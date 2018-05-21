<template>
  <div id="reg">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img src="../../src/assets/reg.jpg" class="mx-auto d-block">
            <form @submit.prevent="onsubmit">
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" class="form-control" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" v-model="password">
              </div>
              <div class="form-group">
                <label for="confirm-password">确认密码</label>
                <input type="password" class="form-control" v-model="confirmPassword">
              </div>
              <button type="submit" class="btn btn-block btn-success">注册账号</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Reg',
  data(){
    return{
      email:'',
      password:'',
      confirmPassword:''
    }
  },
  components:{
    
  },
  methods:{
    onsubmit(){

    }
  }
}
</script>

<style scoped>
  .card-body img{
    height:36vh;
    width: 100%;
    border-radius: 6px;
    opacity: 0.2;
  }
</style>
