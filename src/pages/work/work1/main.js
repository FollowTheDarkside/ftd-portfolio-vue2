import Vue from 'vue'
import WorkPage1 from './WorkPage1.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage1)
}).$mount('#app')