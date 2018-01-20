<template>
  <div class="edit-layer">
    <div class="edit-inner" :class="{'show-out': isClose}">
      <span class="edit-close" @click="close">
        <i class="iconfont icon-close"></i>
      </span>
      <div class="edit-btn ">
        <span class="edit-icon yellow">
          <i class="iconfont icon-edit"></i>
        </span>
        <p>发帖子</p>
      </div>
      <div class="edit-btn ">
        <span class="edit-icon red">
          <i class="iconfont icon-edit"></i>
        </span>
        <p>发跟拍</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isClose: false
    }
  },
  methods: {
    close () {
      this.isClose = true; // 关闭编辑层
      setTimeout(() => {
        this.$emit('editClose', 'isEdit');
      }, 300)
    }
  }
}
</script>

<style scoped>
  .edit-layer {
    position: fixed;
    top: 0;left: 0;bottom: 0;right: 0;
    background-color: rgba(0, 0, 0, .5);
    
  }
  .yellow {
    background-color: #ffd215;
  }
  .red {
    background-color: #ff5a7d;
  }

  .edit-inner {
    height: 3.5rem;
    background-color: #fff;
    border-bottom-left-radius: .4rem;
    border-bottom-right-radius: .4rem;
    display: flex;
    animation: showIn .3s forwards;
    align-items: center;
    justify-content: center;
  }

  .edit-close {
    position: absolute;
    right: .2rem;
    top: .2rem;
  }
  .edit-close .iconfont {
    font-size: .58rem;
    color: #fc3857;
  }
  .edit-btn {
    width: 1.6rem;
    margin-right: 2rem;
  }

  .edit-btn:last-child {
    margin-right: 0;
  }

  .edit-btn .edit-icon {
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .edit-btn .edit-icon .iconfont {
    font-size: .58rem;
    color: #fff;
  }
  .edit-btn p {
    font-size: .32rem;
    text-align: center;
    margin-top: .3rem;
    color: #999;
  }
  
  @keyframes showIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  .show-out {
    animation: showOut .3s forwards;
  }
  @keyframes showOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
</style>
