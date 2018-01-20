<template>
  <div class="fans">
    <router-link to="/my/post" class="item">
      <div class="icon">
        <i class="iconfont icon-edit"></i>
      </div>
      <div class="attr">审帖专区</div>
      <div class="detail">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </router-link>
    <router-link to="/my/post" class="item">
      <div class="icon">
        <i class="iconfont icon-barrage_fill"></i>
      </div>
      <div class="attr">我的帖子</div>
      <div class="detail">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </router-link>
    <router-link to="/my/comment" class="item">
      <div class="icon">
        <i class="iconfont icon-markfill"></i>
      </div>
      <div class="attr">我的评论</div>
      <div class="detail">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </router-link>
    <router-link to="/my/favorite" class="item">
      <div class="icon">
        <i class="iconfont icon-emojiflashfill"></i>
      </div>
      <div class="attr">我收藏的</div>
      <div class="detail">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </router-link>
    <router-link to="/my/up" class="item">
      <div class="icon">
        <i class="iconfont icon-triangleupfill"></i>
      </div>
      <div class="attr">我赞过的</div>
      <div class="detail">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </router-link>
    <router-link to="/my/history" class="item">
      <div class="icon">
        <i class="iconfont icon-browse_fill"></i>
      </div>
      <div class="attr">浏览历史</div>
      <div class="detail">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </router-link>
    <router-link to="/my/report" class="item">
      <div class="icon">
        <i class="iconfont icon-homefill"></i>
      </div>
      <div class="attr">小黑屋</div>
      <div class="detail">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </router-link>
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
    margin: 0 .2rem;
  }
  .fans .item {
    display: flex;
  }
  .iconfont {
    margin-top: .1rem;
    display: inline-block;
  }
  .fans .item > * {
    height: 1rem;
    display: flex;
    align-items: center;
  }
  .fans .icon {
    width: 1rem;
    justify-content: center;
  }
  .fans .detail {
    width: 1rem;
    justify-content: center;
  }
  .fans .item .value {
    font-size: .5rem;
    font-weight: bold;
  }
  .fans .item .attr {
    flex: 1;
    font-size: .32rem;
    margin-top: .06rem;
    color: #999;
  }
  .icon-barrage_fill {
    color: #1970d0;
  }
  .icon-markfill {
    color: #4c92e0;
  }
  .icon-emojiflashfill {
    color: #ffd911;
  }
  .icon-triangleupfill {
    color: #149eff;
  }
  .icon-browse_fill {
    color: #ff5a7d;
  }
</style>
