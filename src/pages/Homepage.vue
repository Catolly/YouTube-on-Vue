<template>
  <main-layout>
    <!-- <router-link to="video">Video</router-link> -->
  </main-layout>
</template>

<script>
  import MainLayout from '@/layout/MainLayout'
  export default {
    name: 'Homepage',
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
<style lang="less" scoped>

</style>
