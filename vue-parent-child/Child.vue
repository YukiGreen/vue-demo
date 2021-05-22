<template>
  <div>
    <h1>Child Component</h1>
    <p>{{ value }}</p>
    <button @click="handleChange">修改 message</button>
    <p>{{ foo }}</p>
    <button @click="$emit('update:foo', 'Child foo')">修改 foo</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  // Props 是单向数据流，子组件只能读取，不能修改（对象类型可以，不建议修改）
  props: {
    // 接收 v-mode 传递的 Props 数据
    value: {
      type: String
    },
    foo: {
      type: String
    }
  },
  methods: {
    handleChange () {
      // this.message = 'Child message'

      // 子组件给父组件发布自定义事件：Events Up
      // this.$emit('change-message', 'child message')
      this.$emit('input', 'child message')
    }
  }
}
</script>

<style>

</style>
