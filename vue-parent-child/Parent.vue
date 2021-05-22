<template>
  <div>
    <h1>Parent Component</h1>
    <p>{{ message }}</p>
    <p>{{ foo }}</p>

    <!-- 给子组件传数据：Props Down -->
    <!-- <Child
      :message="message"
      @change-message="message = $event"
    /> -->

    <!--
      当你需要子组件同步一个数据的时候：
        - 子组件既要使用这个数据
        - 子组件还要修改这个数据
      以前你肯定需要通过 Props Down 和 Events Up 来实现，现在为了方便，提供了一个特殊的语法糖：v-mode。
      v-model="message" 语法糖：
        :value="message" Props Down
        @input="message = 事件参数"
    -->
    <!-- <Child
      v-model="message"
    /> -->

    <!--
      在一个组件上只能使用一次 v-model，如果你想要对多个数据同步绑定，则可以使用 .sync 修饰符。
      .sync 也是一个语法糖。
      :foo="foo" Props Down 传递数据
      @update:foo="foo = 事件参数" 自定义事件
     -->
    <Child
      v-model="message"
      :foo.sync="foo"
      :bar.sync="foo"
    />

    <!--
      v-model 和 .sync 的作用是一样的。到底用哪个？
      如果有且仅有一个数据需要双向绑定：v-model，习惯问题。
      如果有多个数据需要和子组件同步绑定：
        可以把最主要的设置为 v-model
        把其它的设置为 .sync 修饰符
      :value="message"
      @input="message = 事件参数"

      所有组件上监听的事件都是自定义事件
     -->

    <Input v-model="message"/>
  </div>
</template>

<script>
import Child from './Child'
import Input from './Input'

export default {
  name: 'ParentComponent',
  components: {
    Child,
    Input
  },
  data () {
    return {
      message: 'Parent message',
      foo: 'Parent foo',
      bar: 'Parent bar'
    }
  }
}
</script>

<style>

</style>
