import Vue from 'vue'
import App from './App.vue'
import "./js/openseadragon"
import "./js/openseadragon-paperjs-overlay"
import Paper from "../node_modules/paper/dist/paper-full.js"

window.paper = Paper.paper;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
