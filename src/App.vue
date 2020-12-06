<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>   
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

input {
  padding: 0;
  margin: 0;

  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

button,
input {
  outline: none;
  border: none;
  background: none;
}

#app {
  font-family: Roboto, Noto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
