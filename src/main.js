import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods:{
    select(data){
      eventBus.$emit('select', data)
    },
    addERow(){
      eventBus.$emit('addERow')
    },
    addSERow(){
      eventBus.$emit('addSERow')
    },
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
