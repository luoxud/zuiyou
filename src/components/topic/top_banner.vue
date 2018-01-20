<template>
  <div class="top-banner">
    <div class="banner-list">
      <a href="javascript:;">
        <img src="//lxd123.com/images/173916074.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    beforeRouteEnter (to, form, next) {
      next((vm) => {
        vm.store.commit('setState', {
          attr: '$footModule',
          value: 'topic'
        })
        vm.store.commit('setState', {
          attr: '$isMenu',
          value: false
        })
      })
    },
  }
</script>

<style scoped>
  .top-banner {
    position: relative;
  }
  .top-banner .banner-list {
    height: 5.65rem;
  }
</style>
