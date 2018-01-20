<template>
  <div class="my-up">
    <Menu :title="'我赞过的'"></Menu>
    <Msg class="msg">
      <img src="//lxd123.com/zuiyou/img/IMG_1830_03.jpg" alt="">
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
  .my-up .msg img {
    width: 3rem;
  }
</style>
