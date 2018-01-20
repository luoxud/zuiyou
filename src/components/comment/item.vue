<template>
  <div class="comment-item">
    <div class="avater">
      <img src="//lxd123.com/images/153.jpg" alt="">
    </div>
    <div class="info">
      <div class="info-head">
        <div class="info-user">
          <p class="user-name">情义</p>
          <p class="date">2017/10/12</p>
        </div>
        <div class="opt">
          <span class="opt-up">
            <i class="iconfont icon-triangleupfill"></i>144
          </span>
          <span class="opt-down">
            <i class="iconfont icon-triangledownfill"></i>
          </span>
        </div>
      </div>
      <p class="info-text">我也想上去一波。</p>
      <div class="info-video">
        <div class="video-item">
          <img src="//lxd123.com/images/153.jpg" alt="">
        </div>
        <div class="video-item">
          <img src="//lxd123.com/images/152.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment-item',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  .comment-item {
    display: flex;
    margin: .2rem;
    margin-bottom: .2rem;
  }
  .comment-item img {
    width: 100%;
    height: 100%;
  }
  .avater {
    width: 1rem;
    height: 1rem;
    margin-right: .4rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .info {
    flex: 1;
  }
  .info-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-user {
    width: 2rem;
  }
  .info-user .user-name {
    margin-top: .1rem;
    font-size: .32rem;
  }
  .info-user .date {
    font-size: .25rem;
    color: #999;
    margin-top: .1rem;
  }
  .info-text {
    margin-top: .2rem;
  }
  .info-video {
    display: flex;
    flex-wrap: wrap;
    margin: .2rem 0;
  }
  .video-item {
    width: 3rem;
    margin-right: .2rem;
  }
  .opt, .opt .iconfont {
    color: #42bcf6;
  }
  .opt-up {
    margin-right: .2rem;
  }
  .opt-up .iconfont {
    margin-right: .1rem;
  }
</style>
