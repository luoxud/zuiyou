<template>
  <div class="comment">
    <Menu @openShare="shareTaggle" :title="'帖子详情'">
      <div class="edit" @click="shareTaggle(true)">
        <i class="iconfont icon-more"></i>
      </div>
    </Menu>
    <Item :info="data" class="comment-content" @shareTaggle="shareTaggle"></Item>
    <List></List>
    <Share v-if="isShareOpen" @closeShare="shareTaggle"></Share>
  </div>
</template>

<script>
import Item from './../index/item'
import Share from './../index/share'
import List from './list'
import Menu from './menu'

export default {
  name: 'comment',
  beforeRouteEnter (to, form, next) {
    next(vm => {
      vm.store.commit('setState', {
        attr: '$isMenu',
        value: false
      })
      vm.store.commit('setState', {
        attr: '$isFoot',
        value: false
      })
    })
  },
  data () {
    return {
      isShareOpen: false, // 是否打开分享弹框
      data: {
        name: '这么萌你见过吗',
        avater: '//lxd123.com/images/90593124.jpg',
        isShare: true,
        review: {
          text: '我们村里人最会玩～',
          list: [
            {
              avater: '//lxd123.com/images/150.jpg'
            },
            {
              avater: '//lxd123.com/images/149.jpg'
            },
            {
              avater: '//lxd123.com/images/151.jpg'
            },
            {
              avater: '//lxd123.com/images/152.jpg'
            },
            {
              avater: '//lxd123.com/images/153.jpg'
            },
            {
              avater: '//lxd123.com/images/154.jpg'
            }
          ],
          share: 100,
          comment: 888,
          likes: '8.9k'
        }
      }
    }
  },
  methods: {
    shareTaggle (type) {
      this.isShareOpen = type
    }
  },
  components: {
    Item,
    List,
    Share,
    Menu
  }
}
</script>

<style scoped>
  .comment-content {
    padding: 0 .2rem;
    border-bottom: .12rem solid #eee;
  }
  .comment .edit {
    width: 1rem;
  }
  .comment .edit .fa {
    color: #42bcf6;
  }
  .comment {
    padding-top: 1.3rem;
    animation: scaleIn .2s forwards;
  }
  @keyframes scaleIn {
    0% {
      transform: scale(.6, .6);
      opacity: 0;
    }
    100% {
      transform: scale(1, 1); 
      opacity: 1;
    }
    to {
      transform: none;
    }
  }
</style>
