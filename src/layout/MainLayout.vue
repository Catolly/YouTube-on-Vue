<template>
  <div>
    <header-layout></header-layout>
    <sidebar-layout></sidebar-layout>
    <slot></slot>
  </div>
</template>

<script>
  import HeaderLayout from './HeaderLayout'
  import SidebarLayout from './SidebarLayout'
  export default {
    name: 'MainLayout',
    components: {
      HeaderLayout,
      SidebarLayout
    },
    // data() {
    //   return {
    //     sidebarHidden: true
    //   }
    // }
    // methods: {
    //   hideSidebar() {
    //     this.sidebarHidden = false
    //   }
    // }
  }
</script>


<style>

</style>
