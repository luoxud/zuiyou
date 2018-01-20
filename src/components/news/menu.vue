<template>
  <div class="news-menu">
    <div class="title">
    	<a href="javascript:;" :class="{ 'active': tab === 0 }" @click="$emit('switchTab', 0)">提醒</a>
    	<a href="javascript:;" :class="{ 'active': tab === 1 }" @click="$emit('switchTab', 1)">私信</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-menu',
  props: {
  	tab: {
  		type: Number,
  		default: 0
  	}
  }
}
</script>

<style scoped>
	.news-menu {
		display: flex;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 2;
		background-color: #fff;
	}
	.news-menu .title, .title a {
		height: 1.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.news-menu .title {
		flex: 1;
	}
	.news-menu .title a {
		margin-right: 2rem;
		font-size: .40rem;
		padding: 0 .2rem;
		font-weight: bold;
		position: relative;
	}
	.news-menu .title a:last-child {
		margin: 0;
	}
	.news-menu .active:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		width: .2rem;
		left: 50%;
		margin-left: -.1rem;
		border-radius: 50%;
		height: .08rem;
		background-color: #42bcf6;
		animation: scaleIn .2s;
	}
	@keyframes scaleIn {
		0% {
			transform: scale(.2, 1);
		}
		100% {
			transform: scale(1, 1);
		}
	}
</style>
