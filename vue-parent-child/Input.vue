<template>
  <div>
    <h1>Input 组件</h1>
    <!--
      样式
      常用的功能：数据验证、清除输入框等功能的高级输入框组件
      :value="value"
      左边的 value 是：input 的 DOM 属性 value 值
      右边的 value 是来自父组件的数据 value
     -->
    <input type="text" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String
    }
  },
  methods: {
    handleInput (e) {
      // console.log('原生 input dom 的 input 事件触发了', e.target.value)
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>
