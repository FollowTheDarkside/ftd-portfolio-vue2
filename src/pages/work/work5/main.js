import Vue from 'vue'
import WorkPage5 from './WorkPage5.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage5)
}).$mount('#app')