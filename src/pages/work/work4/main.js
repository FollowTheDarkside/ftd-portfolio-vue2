import Vue from 'vue'
import WorkPage4 from './WorkPage4.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage4)
}).$mount('#app')