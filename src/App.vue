<template>
<div id="app">
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
  .fade-enter-active,
  .fade-leave-active {
      transition: all 0.1s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
