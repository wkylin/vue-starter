<template>
  <div>
    <div>我的中国心</div>
    <ul v-for="n in 3"><li>{{msg}}</li></ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>
  html{
    background: #34aa82;
    color: #d8fcff;
  }
  .hi{
    width:200px;
    height:300px;
    background:url(../static/vue.jpg) 0 0 no-repeat;
    background-size:100% 100%;
    color:#999;
  }
</style>