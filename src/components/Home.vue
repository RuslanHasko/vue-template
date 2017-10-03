<template>
  <div class="component-root">
    <h2>Welcome to my test page</h2>
    <button @click="show = true">Show</button>
    <p v-show="show">Hello Nightwatch!</p>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style lang='sass'>
</style>
