<template>
	<div class="item">
		<div class="item-video">
			<img src="//lxd123.com/images/img_01.jpg" alt="" class="video-img">
	    	<div class="video-mask">
	    		<div class="left">
		    		<span>
		    			<i class="iconfont icon-playfill"></i>15.4W
		    		</span>
		    		<span>
		    			<i class="iconfont icon-triangleupfill"></i>888
		    		</span>
	    		</div>
	    		<div class="right">
	    			<img src="//lxd123.com/images/153.jpg" alt="">
	    		</div>
	    	</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'imgText-list-item',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
	.icon-triangleupfill {
		margin-top: .1rem;
		position: relative;
		top: .02rem;
	}
	.item {
		width: 50%;
		margin-bottom: .2rem;
	}
	.item:nth-child(odd) .item-video {
		margin-right: .1rem;
	}
	.item:nth-child(even) .item-video {
		margin-left: .1rem;
	}
	.item-video {
		position: relative;
	}
	.video-mask {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .7rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
	}
	.video-mask .left {
		margin-left: .2rem;
	}
	.video-mask .left span {
		margin-right: .2rem;
	}
	.video-mask .left span .iconfont {
		font-size: .36rem;
		margin-right: .08rem;
	}
	.video-mask .right {
		margin-right: .2rem;
		width: .6rem;
		height: .6rem;
		border-radius: 50%;
		overflow: hidden;
	}
	.video-mask .right img {
		width: 100%;
		height: 100%;
	}
</style>