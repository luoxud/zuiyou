<template>
  <div class="item">
	<div class="member">
		<img :src="info.avater" alt="">
		<p class="name">{{ info.name }}</p>
	</div>
	<div class="review">
		<p class="review-text">
			{{ info.review.text }}
		</p>
		<div class="review-video">
			<div class="review-video-item" v-for="item in info.review.list">
				<img :src="item.avater" alt="">
			</div>
		</div>
	</div>
	<Operate :itemInfo="info" @openShare="$emit('shareTaggle', true)"></Operate>
	
  </div>
</template>

<script>
import Operate from './operate'


export default {
  name: 'index-list-item',
  props: {
  	info: {
  		type: Object,
  		default: {}
  	}
  },
  data () {
    return {
    	
    }
  },
  components: {
  	Operate
  }
}
</script>

<style scoped>
	.item {
		border-bottom: .15rem solid #eee;
		padding: 0 .2rem;
	}
	.item:last-child {
		border-bottom: none;
	}
	.item .member {
		display: flex;
		height: 1rem;
		margin-top: .2rem;
		align-items: center;
	}
	.member img {
		width: .8rem;
		height: .8rem;
		border-radius: 50%;
	}
	.name {
		font-size: .32rem;
		margin-left: .1rem;
	}
	.review {

	}
	.review .review-text {
		font-size: .40rem;
		padding: .2rem 0;
	}
	.review-video {
		display: flex;
		flex-wrap: wrap;
	}
	.review-video-item {
		width: 3.1rem;
		margin-right: .1rem;
		margin-bottom: .1rem;
	}
	.review-video-item img {
		width: 100%;
		height: 3.1rem;
	}
</style>
