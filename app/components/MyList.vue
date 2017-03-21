<template>
  <ul>
    <li v-for="n in 10 ">app-item</li>
  </ul>
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
    color:#fff;
  }
  .hi{
    width:200px;
    height:300px;
    background:url(../static/vue.jpg) 0 0 no-repeat;
    background-size:100% 100%;
    color:#999;
  }
</style>