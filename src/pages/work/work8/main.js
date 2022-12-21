import Vue from 'vue'
import WorkPage8 from './WorkPage8.vue'
import vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(WorkPage8)
}).$mount('#app')