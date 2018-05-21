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
// 引入axios
import axios from 'axios'
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
      // alert(111);
      axios.get('/users.json')
        .then( res =>{
          // console.log(res.data)
          // 拿到整个data数据，数据格式：{{}},对象中又有对象，所以需要遍历，把遍历之后的放入数组
          // 此时的data是一个对象
          const data = res.data;
          // 定义一个空数组
          const users = [];
          // 遍历data对象
          for(let key in data){
            const user = data[key];
            // console.log(user);
            // 获取到的对象添加到数组中
            users.push(user);
          }

          // 利用数组方法filter进行过滤
          let resule = users.filter((user) => {
            // user.email数据库中的；this.email用户输入的
            return user.email === this.email && user.password === this.password
          })
          // 如果匹配上，是一个长度length>1的对象，如果数据库中没有，则返回一个空数组
          // console.log(resule);
          if(resule != null && resule.length > 0){
            this.$router.push('/home')
          }else{
            alert("账号或者密码错误")
          }
        } )
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
