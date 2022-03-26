import Vue from 'vue'
import InfoPage from './InfoPage.vue'
import vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(InfoPage)
}).$mount('#app')