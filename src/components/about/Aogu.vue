<template>
  <div class="con">
      <div class="mt-2 card bg-light text-dark">
        <div class="card-header">章程简介</div>
        <div class="card-body" v-for="item in xinxi" :key="item.index">
            <div class="card-text">{{item}}</div>
        </div>
        <div class="card-footer">
            <a href="https://github.com/526697296/order-system" target="_blank" class="card-link">点我送惊喜，欢迎Stsr~~</a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Con",
  data() {
    return {
        xinxi:["路遇客人要主动热情问候，主动让路",
                "服从领导安排，尽职尽责做好工作",
                "与客人谈话时应站立端正，讲究礼貌，不左顾右盼"]
    };
  },
  components: {}
};
</script>
<style scoped>
    .card-footer a{
        color:#999;
    }
</style>
