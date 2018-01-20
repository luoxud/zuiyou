<template>
  <div class="news">
    <Menu :tab="menuTab"></Menu>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        menuTab: 0
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
</style>
