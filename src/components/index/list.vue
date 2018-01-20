<template>
  <div class="index-list">
    <Item v-for="i in data" :info="i" @shareTaggle="shareTaggle"></Item>
    <Share v-if="isShareOpen" @closeShare="shareTaggle"></Share>
  </div>
</template>

<script>
import Item from './item'
import Share from './share'

export default {
  name: 'index-list',
  props: {
  	data: {
  		type: Array,
  		default () {
  			return []
  		}
  	}
  },
  data () {
    return {
      isShareOpen: false // 是否打开分享弹框
    }
  },
  methods: {
    shareTaggle (type) {
      this.isShareOpen = type
    }
  },
  components: {
  	Item,
    Share
  }
}
</script>

<style scoped>
	.index-list {
		
	}
</style>
