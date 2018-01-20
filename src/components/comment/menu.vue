<template>
  <div class="comment-menu">
    <div class="menu-back" @click="backUp">
    	<i class="iconfont icon-back"></i>
    </div>
    <div class="title">
    	<a href="javascript:;">{{ title }}</a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'comment-menu',
  data () {
    return {
    }
  },
  props: {
  	title: {
  		type: String
  	}
  },
  methods: {
  	backUp () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
	.comment-menu {
		display: flex;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 2;
		background-color: #fff;
	}
	.menu-back, .edit, .title, .title a {
		height: 1.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.menu-back {
		width: 1rem;
	}
	.fa {
		font-size: .52rem;
		color: #999;
	}
	.title {
		flex: 1;
	}
	.title a {
		margin-right: .1rem;
		font-size: .40rem;
		padding: 0 .2rem;
		position: relative;
	}
	
	.router-link-exact-active:after {
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
