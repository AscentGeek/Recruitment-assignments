<template>
  <div v-if="checked" class="position-fixed bottom-0 end-0">
    <div v-if="this.cate == 'e'">
      <div>
        <div class="row col-md-5 pull-right">
          <button class="btn btn-none row" @click="event('e')">+ 경쟁사 추가</button>
          <button class="btn btn-dark row" @click="del('e')">선택 삭제</button>
        </div>
      </div>
    </div>
    <div v-else-if="this.cate == 'se'">
      <div>
        <div class="row col-md-5 pull-right">
          <button class="btn btn-none" @click="event('se')">+ 검색엔진 추가</button>
          <button class="btn btn-dark" @click="del('se')">선택 삭제</button>
        </div>
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
      cate: '',
      checked: []
    }
  },
  methods:{
    event(item){
      if(item == 'e'){
        eventBus.$emit('addERow')
      } else if(item == 'se'){
        eventBus.$emit('addSERow')
      }
    },
    del(item){
      if(item == 'e'){
        eventBus.$emit('delERow')
      } else if(item == 'se'){
        eventBus.$emit('delSERow')
      }
    }
  },
  created(){
    eventBus.$on('select', (value) => {
      this.cate = value.select
      this.checked = value.checked
    })
  }
}
</script>

<style scoped>
</style>