import Vue from 'vue'
import App from './App.vue'
import { Map, TileLayer, OsmSource, Geoloc, Overlay, Feature } from 'vuelayers'
import 'vuelayers/lib/style.css'
import VueLayers from 'vuelayers'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export


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
Vue.use(Overlay)
Vue.use(Feature)

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326', // coords
})
 

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
