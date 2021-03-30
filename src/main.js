import Vue from 'vue'
import App from './App.vue'
import { Map } from 'vuelayers'
import 'vuelayers/lib/style.css'
import VueLayers from 'vuelayers'


Vue.use(Map, {
  load: {
  key: "",
  libraries: "places", // necessary for places input
  region: "uk,en"
}
});

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326',
})
  

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
