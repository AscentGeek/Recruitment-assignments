<template>
  <div id="app">
    <router-view></router-view>
    <side-view></side-view>
  </div>
</template>

<script>
import SideView from './components/SideView'

export default {
  name: 'App',
  components: {
    SideView
  }
}
</script>

<style>
</style>
