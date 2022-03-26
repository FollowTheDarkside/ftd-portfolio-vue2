import Vue from 'vue'
import WorkPage3 from './WorkPage3.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage3)
}).$mount('#app')