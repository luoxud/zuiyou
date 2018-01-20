<template>
  <div class="share">
  	<div :class="{'share-inner': true, 'slide-out': isClose}">
		<div class="share-list">
			<div class="share-item google">
				<i class="iconfont icon-google"></i>
				<p>Google</p>
			</div>
			<div class="share-item alipay">
				<i class="iconfont icon-alipay"></i>
				<p>支付宝</p>
			</div>
			<div class="share-item qq">
				<i class="iconfont icon-qq"></i>
				<p>QQ</p>
			</div>
			<div class="share-item wechat-friend">
				<i class="iconfont icon-wechat-friend"></i>
				<p>朋友圈</p>
			</div>
			<div class="share-item wechat">
				<i class="iconfont icon-wechat"></i>
				<p>微信</p>
			</div>
		</div>
		<div class="share-close" @click="close">取消</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'share',
  data () {
  	return {
  		isClose: false
  	}
  },
  methods: {
  	close () {
  		this.isClose = true // 过度动画
  		setTimeout(() => {
  			this.$emit('closeShare', false)
  		}, 300)
  	}
  }
}
</script>

<style scoped>
	@keyframes slideIn {
		0% {
			transform: translate(0, 100%);	
		}
		100% {
			transform: translate(0, 0);	
		}
	}
	@keyframes slideOut {
		0% {
			transform: translate(0, 0);	
		}
		100% {
			transform: translate(0, 100%);	
		}
	}

	.iconfont {
		font-size: 1rem;
	}

	.icon-google {
		color: #dd5044;
	}
	.icon-alipay {
		color: #009fe9;
	}
	.icon-github {
		color: #46b980;
	}
	.icon-qq {
		color: #4cafe9;
	}
	.icon-wechat-friend {
		color: #6ebc57;
	}
	.icon-wechat {
		color: #51c332;
	}
	.share-close {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1.5rem;
		font-size: .42rem;
		border-top: 1px solid #ddd;
	}
	.share {
		position: fixed;
		top: 0;left: 0;height: 100%;width: 100%;
		z-index: 20;
		background-color: rgba(0, 0, 0, .5);
	}
	.share-inner {
		position: absolute;
		animation: slideIn .3s forwards;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		border-top-right-radius: .4rem;
		border-top-left-radius: .4rem;
	}
	.share-list {
		display: flex;
		margin: 0 .5rem;
		padding: .5rem 0;
	}
	.share-item {
		width: 2rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-right: .5rem;
	}
	.share-item p {
		margin-top: .1rem;
	}
	.share-item:last-child {
		margin-right: 0;
	}
	.slide-out {
		animation: slideOut .3s forwards;
	}
</style>
