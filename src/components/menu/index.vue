<template>
  <div class="menu">
    <div class="search" @click="open('isSearch')">
    	<i class="iconfont icon-search"></i>
    </div>
    <div class="title" v-if="module === 'home'">
    	<a href="javascript:;" @click="$$push('home', 'tuijian')" :class="homeTab === 'tuijian' ? 'router-link-exact-active' : ''">推荐</a>
    	<a href="javascript:;" @click="$$push('home', 'video')" :class="homeTab === 'video' ? 'router-link-exact-active' : ''">视频</a>
    	<a href="javascript:;" @click="$$push('home', 'guanzhu')" :class="homeTab === 'guanzhu' ? 'router-link-exact-active' : ''">关注</a>
    </div>
    <div class="title" v-if="module === 'genpai'">
    	<a href="javascript:;" @click="$$push('genpai', 'guanzhu')" :class="genpaiTab === 'guanzhu' ? 'router-link-exact-active' : ''">关注</a>
    	<a href="javascript:;" @click="$$push('genpai', 'video')" :class="genpaiTab === 'video' ? 'router-link-exact-active' : ''">视频</a>
    </div>
    <div class="edit" @click="open('isEdit')">
    	<i class="iconfont icon-tag"></i>
    </div>
    <Search v-if="isSearch" @searchClose="close"></Search>
    <Edit v-if="isEdit" @editClose="close"></Edit>
  </div>
</template>

<script>
import Search from './search'
import Edit from './edit'

export default {
  name: 'menu',
  props: {
  	module: {
  		type: String,
  		default: ''
  	},
    homeTab: {
      type: String,
      default: ''
    },
    genpaiTab: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    	isSearch: false,
    	isEdit: false
    }
  },
  methods: {
  	open (data) {  // 打开层
  		this[data] = true
  	},
  	close (data) { // 关闭层
  		this[data] = false
  	},
  	$$push (type, value) {
  		let attr
  		switch(type) {
  			case 'home':
  				attr = '$homeTab'
  				this.homeTab = value
  				break
  			case 'genpai':
  				attr = '$genpaiTab'
  				this.genpaiTab = value
  				break
  		}
  		this.store.commit('setState', {
  			attr,
  			value
  		})
  	}
  },
  components: {
  	Search,
  	Edit
  }
}
</script>

<style scoped>
	.menu {
		display: flex;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 2;
		background-color: #fff;
	}
	.search, .edit, .title, .title a {
		height: 1.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search {
		width: 1rem;
	}
	.iconfont {
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
    font-weight: bold;
	}
	.edit {
		width: 1rem;
	}
	.edit .iconfont {
		color: #42bcf6;
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
