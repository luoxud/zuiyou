<template>
  <div class="index">
    <TopBanner></TopBanner>
    <HorOverflow :data="horOverflow_data"></HorOverflow>
    <List></List>
  </div>
</template>

<script>
  import TopBanner from './top_banner'
  import HorOverflow from './hor_overflow'
  import List from './list'

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
    data () {
      return {
        horOverflow_data: [
          {
            name: '关注',
            id: 1,
            cur: true
          },
          {
            name: '热门',
            id: 2
          },
          {
            name: '搞笑',
            id: 3
          },
          {
            name: '娱乐',
            id: 4
          },
          {
            name: '关注',
            id: 5
          },
          {
            name: '热门',
            id: 6
          },
          {
            name: '搞笑',
            id: 7
          },
          {
            name: '娱乐',
            id: 8
          }
        ]
      }
    },
    components: {
      TopBanner,
      HorOverflow,
      List
    }
  }
</script>

<style scoped>
  .index {
  }
</style>
