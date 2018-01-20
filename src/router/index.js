import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Genpai from '@/components/genpai'
import Comment from '@/components/comment'
import Topic from '@/components/topic'
import News from '@/components/news'
import My from '@/components/my'
import MyPost from '@/components/my_post'
import MyComment from '@/components/my_comment'
import MyFavorite from '@/components/my_favorite'
import MyUp from '@/components/my_up'
import MyHistory from '@/components/my_history'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Index
    },
    {
      path: '/genpai',
      component: Genpai
    },
    {
      path: '/comment',
      component: Comment
    },
    {
      path: '/huati',
      component: Topic
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/my/post',
      component: MyPost
    },
    {
      path: '/my/comment',
      component: MyComment
    },
    {
      path: '/my/favorite',
      component: MyFavorite
    },
    {
      path: '/my/up',
      component: MyUp
    },
    {
      path: '/my/history',
      component: MyHistory
    }
  ]
})

