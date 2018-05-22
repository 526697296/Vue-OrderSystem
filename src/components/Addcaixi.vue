<template>
  <div class="addcaixi">
      <form>
        <!-- <p class="text-muted">添加菜系：</p> -->
        <div class="form-group row">
            <label class="col-sm-1">菜名</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newp.name">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" class="form-control" v-model="newp.description"></textarea>
            </div>
        </div>
        <p><strong>规格一：</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">规格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newp.size1">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newp.price1">
            </div>
        </div>
        <p><strong>规格二：</strong></p>
        <div class="form-group row">
            <label class="col-sm-1">规格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newp.size2">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newp.price2">
            </div>
        </div>
        <div class="form-group row">
            <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
        </div>
      </form>
  </div>
</template>
<script>
export default {
  name: "Addcaixi",
  data() {
    return {
        newp:{}
    };
  },
  methods: {
      addMenuItem(){
        //   console.log(this.newp)
        let data = {
            name:this.newp.name,
            description:this.newp.description,
            options:[
                {
                    size:this.newp.size1,
                    price:this.newp.price1
                },{
                    size:this.newp.size2,
                    price:this.newp.price2
                }
            ]
        }
        // 27732357@qq.com abc12345
        fetch("https://wd5259196195tskwvr.wilddogio.com/zmenu.json",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
            .then(res => {res.json()})
            .then(data => {this.$router.push('/menu')})
            .catch(err => {console.log(err)})
      }
  }
}
</script>
<style scoped>
</style>
