<template>
  <main-layout>
    <div class="hello">
      <h1>SingleVideoPage</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'SingleVideo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background: red;
}
</style>
