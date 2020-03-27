import Vue from 'vue'
import App from './App.vue'
import Bootstrap from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css" //Записать
import Router from "vue-router"
import "./styles/style.css"

Vue.config.productionTip = false

Vue.use(Bootstrap);
Vue.use(Router)

new Vue({
  Router,
  render: function (h) { return h(App) },
}).$mount('#app')
