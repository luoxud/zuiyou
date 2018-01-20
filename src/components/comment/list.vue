<template>
  <div class="comment-container">
    <div class="head">
      <p class="title">评论</p>
      <div class="filter">
        最热 <i class="iconfont icon-order"></i>
      </div>
    </div>
    <Item v-for="i in comments" :key="i.id"></Item>
  </div>
</template>

<script>
import Item from './item'

export default {
  name: 'comment',
  data () {
    return {
      comments: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped>
  .head {
    padding: 0 .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    font-size: .34rem;
    color: #999;
    border-bottom: 1px solid #eee;
  }
  .filter .fa {
    margin-left: .1rem;
  }
</style>
