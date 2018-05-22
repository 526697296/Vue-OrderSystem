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
        <tbody>
          <tr>
            <td>黄焖鸡</td>
            <td>
              <button class="btn btn-sm btn-outline-danger">&times;</button>
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

    }
  },
  components:{
    Addcaixi
  }
}
</script>

<style scoped>
  .admin{
    margin-top: 6px;
  }
</style>
