import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AuthService from "./AuthService"
import { Drag, Drop } from 'vue-drag-drop'

Vue.component('drag', Drag)
Vue.component('drop', Drop)

//Vue.config.productionTip = false

async function init() {
  let user = await AuthService.Authenticate()
  if (user) { store.commit("setUser", user) }
  else { router.push({ name: 'login' }) }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
init()
