<template>
  <div class="admin row">
    <div class="col-sm-12 col-md-8">
      <addcaixi></addcaixi>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- <button class="btn btn-block btn-secondary">—— 菜系管理 ——</button> -->
      <div class="card bg-secondary text-white">
        <div class="card-title text-center">—— 菜系管理 ——</div>
      </div>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>菜名</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuitems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="delemenu(item)" class="btn btn-sm btn-outline-danger">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>   
  </div>
</template>

<script>
import Addcaixi from './Addcaixi.vue'
export default {
  name: 'Admin',
  data(){
    return{
      // getMenuitems:[]
    }
  },
  computed:{
    getMenuitems:{
      get(){
        return this.$store.state.menuItmes
      },
      set(){}
    }
  },
  components:{
    Addcaixi
  },
  methods:{
    delemenu(item){
      fetch("https://wd5259196195tskwvr.wilddogio.com/zmenu/"+item.id+"/.json",{
        method:"DELETE",
        headers:{
          'Content-type':'application/json'
        }
      })
      .then(res => {
        res.json()
      })
      .then(data =>{
        this.$router.push('/menu')
        // this.$store.commit('removemenuItems',item)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created(){
    fetch("https://wd5259196195tskwvr.wilddogio.com/zmenu.json")
      .then(res => {
        return res.json()
      })
      .then(data => {
        let menua = [];
        for(let key in data){
          data[key].id = key;
          menua.push(data[key])
        }
        // 利用vuex进行数据同步
        this.$store.commit("setMenuItems",menua)
        // this.getMenuitems = menua;
      })
  }
}
</script>

<style scoped>
  .admin{
    margin-top: 6px;
  }
</style>
