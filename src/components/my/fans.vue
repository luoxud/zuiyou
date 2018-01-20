<template>
  <div class="fans">
    <div class="item">
      <p class="value">0</p>
      <p class="attr">帖子</p>
    </div>
    <div class="item">
      <p class="value">1</p>
      <p class="attr">获赞</p>
    </div>
    <div class="item">
      <p class="value">0</p>
      <p class="attr">关注</p>
    </div>
    <div class="item">
      <p class="value">0</p>
      <p class="attr">粉丝</p>
    </div>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style scoped>
  .fans {
    display: flex;
    border-bottom: .2rem solid #eee;
  }
  .fans .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
  }
  .fans .item .value {
    font-size: .5rem;
    font-weight: bold;
  }
  .fans .item .attr {
    font-size: .25rem;
    margin-top: .06rem;
    color: #999;
  }
</style>
