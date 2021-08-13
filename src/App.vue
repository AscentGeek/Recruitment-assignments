<template>
  <div id="app">
    <project-view></project-view>
    <side-view></side-view>
  </div>
</template>

<script>
import ProjectView from './components/ProjectView'
import SideView from './components/SideView'

export default {
  name: 'App',
  components: {
    ProjectView,
    SideView
  }
}
</script>

<style>
</style>
