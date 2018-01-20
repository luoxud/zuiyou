<template>
  <div class="my">
    <div class="my-head">
      <div class="my-head-bg"></div>
      <div class="my-head-bg2"></div>
      <div class="head-info">
        <div class="user">
          <div class="avater">
            <img src="//lxd123.com/images/152.jpg" alt="">
          </div>
          <p class="name">特么的套路</p>
          <p class="msg">这个人很懒，什么都没有写~</p>
          <div class="user-opt">
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
      </div>
    </div>
    <Fans></Fans>
    <Related></Related>
  </div>
</template>

<script>
  import Fans from './fans'
  import Related from './related'

  export default {
    beforeRouteEnter (to, form, next) {
      next((vm) => {
        vm.store.commit('setState', {
          attr: '$footModule',
          value: 'my'
        })
        vm.store.commit('setState', {
          attr: '$isMenu',
          value: false
        })
      })
    },
    components: {
      Fans,
      Related
    }
  }
</script>

<style scoped>
  .my {
    padding-bottom: 1.3rem;
  }
  .my-head {
    background: url('//lxd123.com/images/no_data_img_03.jpg');
    background-size: 100% 100%;
    position: relative;
    height: 7rem;
  }
  .my-head .my-head-bg {
    height: 3rem;
    background-image:-webkit-linear-gradient(to top, #504d4d, rgba(255,255,255,.1));
    background-image:linear-gradient(to top, #504d4d, rgba(255,255,255,.1));
    position: absolute;
    bottom: 0;left: 0;width: 100%;
  }
  .my-head .my-head-bg2 {
    height: 1.8rem;
    background-image:-webkit-linear-gradient(to top,rgba(255,255,255,.1), #504d4d);
    background-image:linear-gradient(to top,rgba(255,255,255,.1), #504d4d);
    position: absolute;
    top: 0;left: 0;width: 100%;
  }
  .head-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
  }
  .my .user {
    padding: 0 .4rem;
    color: #fff;
  }
  .my .user .avater {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .my .user .name {
    font-size: .36rem;
    margin-top: .2rem;
  }
  .my .user .msg {
    font-size: .26rem;
    margin-top: .2rem;
  }
  .my .user .user-opt {
    position: absolute;
    bottom: .6rem;
    right: .2rem;
  }
  .my .user .user-opt .iconfont {
    transform: rotate(180deg);
  }
</style>
