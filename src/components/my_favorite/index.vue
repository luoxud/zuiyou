<template>
  <div class="my-favorite">
    <Menu :title="'我收藏的'">
      <div class="add">
        <span>
          <i class="iconfont icon-jiajianzujianjiahao"></i>
        </span>
      </div>
    </Menu>
    <Msg class="msg">
      <img src="//lxd123.com/zuiyou/img/IMG_1828_03.jpg" alt="">
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
  .my-favorite .msg {
    background-color: #f0f0f8;
  }
  .my-favorite .add {
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .my-favorite .add span {
    width: .8rem;
    height: .8rem;
    background-color: #eee;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
</style>
