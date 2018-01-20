<template>
  <div class="operate">
    <div class="operate-left">
      <a href="javascript:;" @click="$emit('openShare', true)">
        <i class="iconfont icon-forwardfill"></i>{{ itemInfo.review.share }}
      </a>
      <a to="/comment" @click="openDetail">
        <i class="iconfont icon-markfill"></i>{{ itemInfo.review.comment }}
      </a>
    </div>
    <div class="operate-right">
      <a href="javascript:;" :class="{'active': isUp}" @click="up">
        <i class="iconfont icon-triangleupfill"></i>{{ itemInfo.review.likes }}
      </a>
      <a href="javascript:;" :class="{'active': isDown}" @click="down">
        <i class="iconfont icon-triangledownfill"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'operate',
  props: {
    itemInfo: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
    	isUp: false
    }
  },
  methods: {
    openDetail () { // 打开评论详情
      this.$router.push('/comment')
    },
    up () {
      this.isUp = true
      this.isDown = false
    },
    down () {
      this.isUp = false
      this.isDown = true
    }
  }
}
</script>

<style scoped>
	.operate {
    display: flex;
    margin: .2rem 0;
    justify-content: space-between;
  }
  .operate a {
    display: flex;
    align-items: center;
    height: .8rem;
  }
  .operate .iconfont {
    font-size: .44rem;
    color: #999;
  }
  .operate-left {
    width: 3rem;
    display: flex;
  }
  .operate-left a {
    margin-right: 1rem;
  }
  .operate-right a:first-child {
    margin-right: .4rem;
  }
  .iconfont {
    margin-top: .06rem;
  }
  .operate .iconfont {
    margin-right: .18rem;
  }
  .operate-right {
    width: 3rem;
    display: flex;
    justify-content: flex-end;
  }
  .icon-triangledownfill {
    margin: 0;
  }
  .active {
    color: #42bcf6;
  }
  .active .iconfont {
    color: #42bcf6;
  }
</style>
