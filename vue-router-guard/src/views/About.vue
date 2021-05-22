<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form action="">
      <input type="text">
      <button>提交</button>
    </form>
  </div>
</template>

<script>
export default {
  created () {
    // 如果组件需要渲染异步数据，我们一般会在 created 或者 mounted 中请求加载
    console.log('About created')
  },
  beforeRouteEnter (to, from, next) {
    console.log('About beforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('About beforeRouteUpdate')
    next()
  },

  beforeRouteLeave (to, from, next) {
    console.log('About beforeRouteLeave')
    next()
    // console.log('从哪来的', from)
    // console.log('要去的位置', to)
    // if (window.confirm('数据未保存确认离开？')) {
    //   // 允许离开了
    //   next()
    // }
    // console.log('要离开 about 了')
  },
  watch: {
    $route () {
      console.log('About 组件重用路径改变被监视到了')
    }
  },

}
</script>
