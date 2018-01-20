<template>
  <div class="my-post">
    <Menu :title="'我的帖子'"></Menu>
    <Msg>
    	<img src="//lxd123.com/zuiyou/img/IMG_1827_03.jpg" alt="">
    </Msg>
  </div>
</template>

<script>
  import Menu from './../comment/menu'
  import Msg from './msg'

  export default {
    components: {
      Menu,
      Msg
    }
  }
</script>

<style scoped>
  
</style>
