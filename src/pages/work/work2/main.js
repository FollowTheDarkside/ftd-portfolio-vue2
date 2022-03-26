import Vue from 'vue'
import WorkPage2 from './WorkPage2.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage2)
}).$mount('#app')