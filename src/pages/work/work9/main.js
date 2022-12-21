import Vue from 'vue'
import WorkPage9 from './WorkPage9.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage9)
}).$mount('#app')