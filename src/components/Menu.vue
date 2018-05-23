<template>
  <div class="menu row">
    <!-- 左侧菜单结构 -->
    <div class="col-sm-12 col-md-8">
      <table class="table ">
        <thead class="thead-default">
          <tr>
            <th>规格</th>
            <th>价格</th>
            <th>购买</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}元</td>
            <td><button @click="addToblack(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- {{bascks}} -->
    <!-- 右侧购物车结构 -->
    <div class="col-sm-12 col-md-4">
      <!-- <button class="btn btn-block btn-secondary">—— 购物车总览 ——</button> -->
      <div class="card bg-secondary text-white">
        <div class="card-title text-center">—— 购物车总览 ——</div>
      </div>
      <!-- 进行判断购物车中是否有数据，在进行展示 -->
      <div v-if="bascks.length">
        <table class="table">
        <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody v-for="item in bascks" :key="item.id">
          <tr>
            <td>
              <button @click="dquantity(item)" class="btn btn-sm btn-outline-success">-</button>
              <span>{{item.quantity}}</span>
              <button @click="iquantity(item)" class="btn btn-sm btn-outline-success">+</button>
            </td>
            <td>{{item.name}}{{item.size}}</td>
            <td>{{item.price * item.quantity}}元</td>
          </tr>
        </tbody>
      </table>
      <p>总金额：{{toal + "元"}}</p>
      <button class="btn btn-block btn-success">提交</button>
      </div>
      <!-- 如果购物车未添加数据，则隐藏 -->
      <div v-else>{{basktext}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Menu',
  data(){
    return{
      // push购物车的数据
      bascks:[],
      basktext:"目前购物车还未添加任何商品，请左边选择。",
      // 自己mock的数据
      // getMenuItems:{}
    }
  },
  created(){
    this.axiosdata()
  },
  computed:{
    getMenuItems(){
      // 获取vuex里面的数据
      return this.$store.state.menuItmes
    },
    toal(){
      let totalm = 0;
      for(let index in this.bascks){
        let inditem = this.bascks[index];
        totalm += inditem.quantity * inditem.price
      }
      return totalm;
    }
  },
  methods:{
    axiosdata(){
      // axios.get('/zmenu.json')
      //   .then((res) => {
      //     this.getMenuItems = res.data;
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      // 将请求到的数据放入vuex中
      axios.get('/zmenu.json')
        .then((res) => {
          this.$store.commit("setMenuItems",res.data)
        })
    },
    addToblack(item,option){
      let bask = {
        name:item.name,
        size:option.size,
        price:option.price,
        // quantity自定义，表示数量
        quantity:1
      }
      // 判断购物车是否有相同商品
      if(this.bascks.length > 0){
        let rues = this.bascks.filter((bask) => {
          return (bask.name === item.name && bask.price === option.price)
        })
        if(rues != null && rues.length > 0){
          rues[0].quantity++
        }else{
          this.bascks.push(bask)
        }
      }else{
        // 把data数据push到bascks数组里面
        this.bascks.push(bask)
      }

      
    },
    // 购物车-
    dquantity(item){
      item.quantity--;
      if(item.quantity <= 0){
        this.removebasck(item)
      }
    },
    // 购物车+
    iquantity(item){
      item.quantity++
    },
    removebasck(item){
      this.bascks.splice(this.bascks.indexOf(item),1)
    }
  }
}
</script>

<style scoped>
  .menu{
    margin-top: 6px;
  }
</style>
