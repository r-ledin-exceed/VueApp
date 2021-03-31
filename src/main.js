import Vue from 'vue'
import App from './App.vue'
import { Map, TileLayer, OsmSource, Geoloc } from 'vuelayers'
import 'vuelayers/lib/style.css'
import VueLayers from 'vuelayers'
import { Feature } from 'vuelayers'

Vue.use(Feature)

Vue.use(Map, {
  load: {
  key: "",
  libraries: "places", // necessary for places input
  region: "uk,en"
}
});

Vue.use(TileLayer)
Vue.use(OsmSource)
Vue.use(Geoloc)

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326', // coords
})
 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
