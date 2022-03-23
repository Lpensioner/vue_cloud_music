import Vue from 'vue'
import VueRouter from 'vue-router'


const Index = () => import('@/components/Index.vue')
const Discover = () => import('@/views/discover/Discover.vue')
const Recommend = () => import('@/views/discover/discoverChildren/Recommend.vue')
// const Video = () => import('views/video/Video.vue')//视频

// const Favorites = () => import('views/favorites/Favorites.vue')//收藏
// const RecommendMusic = () => import('views/recommendMusic/RecommendMusic.vue')//每日推荐
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { 
    path:"/index",
    component:Index,
    redirect:'/discover',
    children: [
      {
        path:'/discover',
        component:Discover,
        redirect:'/discover/recommend',
        children: [
          { path: '/discover/recommend', component: Recommend },
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
