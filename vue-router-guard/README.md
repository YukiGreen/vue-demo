# vue-router-guard

Vue Router 导航守卫：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html。
router.beforeEach：路由导航前调用
开始加载进度条
判断用户访问权限
router.afterEach：路由导航完成调用
结束加载进度条


完整的导航解析流程：
1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
    - 如果页面中有重要的信息需要用户保存后才能进行跳转，可以在这里拦截给出提示信息。
    - 当开启组件缓存的时候是不会触发 destroy 等销毁的生命周期钩子函数，也就无法在组件销毁的时候做一些清理工作（比如清除定时器）；这种情况如果想要让页面离开的时候做清理则可以借助这个导航守卫。
3. 调用全局的 beforeEach 守卫。
    - 开始加载动画
    - 校验页面访问权限
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    - 路由参数改变时触发这个钩子，例如从 /foo/1 和 /foo/2 之间跳转的时候需要重新请求数据，这种类型的跳转不会触发 created 生命周期函数，可以通过该钩子函数或者监听 $route 来实现。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
    - 结束加载动画
11. 触发 DOM 更新。
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
