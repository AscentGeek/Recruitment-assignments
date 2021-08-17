import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods:{
    test(data){
      eventBus.$emit('test', data)
    },
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
