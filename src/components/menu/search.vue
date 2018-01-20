<template>
  <div class="menu-search">
    <div class="search-query">
    	<div class="search-query-input">
    		<span class="search-btn"><i class="iconfont icon-search"></i></span>
    		<div class="search-input">
    			<input class="" type="" name="" placeholder="">
    		</div>
    	</div>
    	<div class="search-close" @click="$emit('searchClose', 'isSearch')">
    		<i class="iconfont icon-close"></i>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu-search',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
	@keyframes scaleIn {
		0% {
			transform: scale(.6, .6);
			opacity: 0;
		}
		100% {
			transform: scale(1, 1);	
			opacity: 1;
		}
	}
	.menu-search {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #fff;
		overflow: auto;
		animation: scaleIn .2s forwards;
	}
	.menu-search input {
		width: 100%;
	}
	.search-query {
		margin: .2rem .2rem 0 .2rem;
		height: 1rem;
		display: flex;
		justify-content: center;
	}
	.search-query-input {
		background-color: #eee;
		height: 100%;
		border-radius: .5rem;
		display: flex;
		width: 8rem;
	}
	.search-btn {
		display: block;
		width: .8rem;
	}
	.search-btn .iconfont {
		font-size: .48rem;
		color: #999;
	}
	.search-query-input .search-input {
		flex: 1;
		margin-right: .2rem;
	}
	.search-query-input > * {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search-query-input .search-input input {
		background-color: transparent;
		outline: none;
		border: none;
		padding: .3rem 0;
	}
	.search-close {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: #eee;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: .2rem;
	}
	.search-close .iconfont {
		font-size: .48rem;
		color: #999;
	}
</style>
