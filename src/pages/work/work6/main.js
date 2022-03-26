import Vue from 'vue'
import WorkPage6 from './WorkPage6.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage6)
}).$mount('#app')