import Vue from 'vue'
import ContactPage from './ContactPage.vue'
import vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(ContactPage)
}).$mount('#app')