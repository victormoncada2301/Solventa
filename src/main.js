import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


/* Boostrap - Se encuentra en el manejador de paquetes Node Modules */
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

/* Importar estilos de Boostrap*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
