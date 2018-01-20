<template>
  <div class="imgText-list">
    <Item v-for="i in data" :key="i.id"></Item>
  </div>
</template>

<script>
import Item from './item'

export default {
  name: 'imgText-list',
  props: {
    data: {
      type: Array
    }
  },
  components: {
  	Item
  },
  watch: {
    data (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
	.imgText-list {
		display: flex;
		flex-wrap: wrap;
	}
</style>
