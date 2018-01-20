<template>
  <div class="news">
    <Menu :tab="menuTab" @switchTab="switchTab"></Menu>
    <div class="news-data">
      <div class="msg">
        <img src="//lxd123.com/images/no_data_img_03.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './menu'

  export default {
    beforeRouteEnter (to, form, next) {
      next((vm) => {
        vm.store.commit('setState', {
          attr: '$footModule',
          value: 'news'
        })
        vm.store.commit('setState', {
          attr: '$isMenu',
          value: false
        })
      })
    },
    data () {
      return {
        menuTab: 0
      }
    },
    methods: {
      switchTab (index) {
        this.menuTab = index
      }
    },
    components: {
      Menu
    }
  }
</script>

<style scoped>
  .news {
  }
  .news-data {

  }
  .news-data .msg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
  }
  .news-data .msg img {
    width: 5rem;
  }
</style>
