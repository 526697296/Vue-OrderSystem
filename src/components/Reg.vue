<template>
  <div class="reg container">
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
// 引入axios
import axios from 'axios'
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
      // 判断注册的时候，密码和确认密码是否一致，一致才可以提交
      if( this.password === this.confirmPassword){
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        // 把输入框中的数据post到数据库存贮，成功之后页面跳转到login页面
        axios.post('/users.json',formData).then(res => {this.$router.push('/login')})
      }else{
        alert("两次密码不一致")
      }
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
  .reg{
    margin-top: 6px;
  }
</style>
