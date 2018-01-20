<template>
  <div class="imgText">
    <List :data="data[$genpaiTab]"></List>
  </div>
</template>

<script>
import List from './list'

export default {
  name: 'imgText',
  beforeRouteEnter (to, form, next) {
    next(vm => {
      vm.store.commit('setState', {
        attr: '$footModule',
        value: 'genpai'
      })
      vm.store.commit('setState', {
        attr: '$isMenu',
        value: true
      })
    })
  },
  computed: {
    $genpaiTab () {
      return this.store.state.$genpaiTab
    }
  },
  data () {
    return {
      data: {
        guanzhu: [
          {
            avater: '',
            id: 1
          },
          {
            avater: '',
            id: 2
          },
          {
            avater: '',
            id: 3
          },
          {
            avater: '',
            id: 4
          }
        ],
        video: [
          {
            avater: '',
            id: 1
          },
          {
            avater: '',
            id: 2
          },
          {
            avater: '',
            id: 3
          }
        ]
      }
    }
  },
  components: {
  	List
  }
}
</script>

<style scoped>
	.imgText {
		margin: 0 .2rem;
    padding: 1.3rem 0;
	}
</style>
