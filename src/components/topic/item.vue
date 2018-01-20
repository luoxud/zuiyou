<template>
  <div class="topic-item">
    <div class="avater">
      <img :src="info.avater" alt="">
    </div>
    <div class="info">
      <p class="title">这特么都是套路</p>
      <p class="tip">禁止的帖子类型！</p>
    </div>
    <div class="opt">
      <span :class="{attention: true, active: isAtten}" @click="attention">{{ attentionText }}</span>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      info: {
        type: Object
      }
    },
    data () {
      return {
        isAtten: false
      }
    },
    computed: {
      attentionText () {
        return this.isAtten ? '已关注' : '关注'
      }
    },
    methods: {
      attention () {
        this.isAtten = true
      }
    }
  }
</script>

<style scoped>
  .topic-item {
    display: flex;
    border-bottom: 1px solid #eee;
    margin: 0 .4rem;
    padding: .2rem 0;
  }
  .topic-item .avater {
    width: 2rem;
    border-radius: .4rem;
    overflow: hidden;
  }
  .topic-item .info {
    flex: 1;
    display: flex;
    height: 2rem;
    justify-content: center;
    padding-left: .5rem;
    flex-direction: column;
  }
  .topic-item .title {
    font-size: .4rem;
    font-weight: bold;
  }
  .topic-item .tip {
    color: #999;
    margin-top: .1rem;
    font-size: .26rem;
  }
  .topic-item .opt {
    width: 2rem;
    text-align: right;
  }
  .topic-item .attention {
    display: inline-block;
    color: #fff;
    background-color: #499cf8;
    padding: .1rem .4rem;
    border-radius: .5rem;
    margin-top: .4rem;
  }
  .topic-item .active {
    color: #fff;
    background-color: #999;
  }
</style>
