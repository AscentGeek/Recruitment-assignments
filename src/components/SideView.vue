<template>
  <div v-if="this.enemy">
    <div class="row">
      <div>
        <button class="pull-right btn btn-none">+ 경쟁사 추가</button>
      </div>
    </div>
  </div>
  <div v-else-if="this.se">
    <div class="row">
      <div>
        <button class="pull-right btn btn-none">+ 검색엔진 추가</button>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
  name: "SideView",
  data(){
    return{
      enemy:'',
      se:''
    }
  },
  created(){
    eventBus.$on('test', (value) => {
      this.enemy = value
    })
  }
}
</script>

<style scoped>

</style>