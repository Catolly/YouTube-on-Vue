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
    }
  }
</script>


<style>
  
</style>
