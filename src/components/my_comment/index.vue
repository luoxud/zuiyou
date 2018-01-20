<template>
  <div class="my-post">
    <Menu :title="'我的评论'"></Menu>
    <Msg>
      <img src="//lxd123.com/zuiyou/img/IMG_1829_03.jpg" alt="">
    </Msg>
  </div>
</template>

<script>
  import Menu from './../comment/menu'
  import Msg from './../my_post/msg'

  export default {
    components: {
      Menu,
      Msg
    }
  }
</script>

<style scoped>
  
</style>
