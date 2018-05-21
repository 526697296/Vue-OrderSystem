<template>
  <div id="menu">
    <div class="col-sm-12">
      <table class="table">
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
            <td>{{option.price}}</td>
            <td><button class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data(){
    return{
      // 自己mock的数据
      getMenuItems:{
        1:{
          'name':'黄焖鸡米饭',
          'description':'加鸡腿',
          'options':[{
            'size':10,
            'price':38
          },{
            'size':12,
            'price':48
          }]
        },
        2:{
          'name':'兴国米粉鱼',
          'description':'加鸡腿',
          'options':[{
            'size':10,
            'price':38
          },{
            'size':12,
            'price':48
          }]
        },
        3:{
          'name':'小鸡炖蘑菇',
          'description':'加鸡腿',
          'options':[{
            'size':10,
            'price':38
          },{
            'size':12,
            'price':48
          }]
        }
      }
    }
  },
  components:{
    
  }
}
</script>

<style scoped>

</style>
