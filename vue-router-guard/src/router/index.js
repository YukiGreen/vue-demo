import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 路由独享的守卫是：导航已完成并且进入当前页面中了
    // beforeEnter (to, from, next) {
    //   console.log('Home beforeEnter')
    //   next()
    // },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter (to, from, next) {
      console.log('About beforeEnter')
      next()
    }
  },
  {
    path: '/about2',
    name: 'About2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// to：要去哪里
// from：从哪来的
// next：允许通过
// 任何页面的展示都要经过全局守卫
router.beforeEach((to, from, next) => {
  // 开启加载动画
  console.log('全局守卫', 'beforeEaech')
  // 这里通常用来做一些统一的导航逻辑处理，比如判断用户的登录状态，判断用户对页面的访问权限等操作
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('全局 beforeResolve')
  next()
})

// 执行到这里，已经完成导航了，所以不需要 next 了
// 这里不嫩个进行拦截处理
router.afterEach((to, from) => {
  // 结束加载动画
  console.log('全局 afterEach')
})

export default router
