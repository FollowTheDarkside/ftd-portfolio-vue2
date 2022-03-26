import Vue from 'vue'
import WorkPage7 from './WorkPage7.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage7)
}).$mount('#app')