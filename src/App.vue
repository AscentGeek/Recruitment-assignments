<template>
  <div id="app" class="row">
    <router-view class="col-sm-9"></router-view>
    <side-view class="col-sm-3 sidebar"></side-view>
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
