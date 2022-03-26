import Vue from 'vue'
import OtherPage from './OtherPage.vue'
import vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(OtherPage)
}).$mount('#app')