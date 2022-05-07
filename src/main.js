import Vue from 'vue'
import App from '@/App.vue'
import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' // Записать
import '@/styles/style.css'
import router from '@/router'
import store from './store/index'

Vue.use(Bootstrap)

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
