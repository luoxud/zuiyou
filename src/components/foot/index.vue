<template>
  <div class="foot">
	<router-link to="/home">
		<i class="iconfont icon-homefill"></i>
		<p>最右</p>
	</router-link>
	<router-link to="/genpai">
		<i class="iconfont icon-camera"></i>
		<p>跟拍</p>
	</router-link>
	<router-link to="/huati">
		<i class="iconfont icon-edit"></i>
		<p>话题</p>
	</router-link>
	<router-link to="/news">
		<i class="iconfont icon-comment"></i>
		<p>消息</p>
	</router-link>
	<router-link to="/my">
		<i class="iconfont icon-my"></i>
		<p>我的</p>
	</router-link>
  </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style scoped>
	.foot {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
		border-top: 1px solid #ddd;
	}
	.foot a {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1.3rem;
		flex-direction: column;
		position: relative;
	}
	.foot .iconfont {
		font-size: .52rem;
	}
	.router-link-exact-active, .router-link-exact-active .iconfont {
		color: #42bcf6;
	}
	.icon-commentfill {
		color: #999;
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
