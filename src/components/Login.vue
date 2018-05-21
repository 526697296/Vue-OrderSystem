<template>
  <div id="login">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img src="../../src/assets/login.jpg" class="mx-auto d-block">
            <form @submit.prevent="onsubmit">
              <div class="form-group">
                <label for="email">账号</label>
                <input type="email" class="form-control" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" v-model="password">
              </div>
              <button type="submit" class="btn btn-block btn-success">欢迎登入</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return{
      email:'',
      password:'',
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
    opacity: 0.5;
  }
</style>
