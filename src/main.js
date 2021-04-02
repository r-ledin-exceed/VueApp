import Vue from 'vue'
import App from './App.vue'
import { Map, TileLayer, OsmSource, Geoloc, Overlay, Feature } from 'vuelayers'
import 'vuelayers/lib/style.css'
import VueLayers from 'vuelayers'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export
import Vuex from 'vuex'
import UUID from 'vue-uuid'

Vue.use(UUID);

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

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [
      {coords: [-75.726634, 28.003391]}, 
      {coords: [62.726634, 12.003391]},
      {coords: [0, 0]} 
    ],
  },
  mutations: {
    increment (state, coords) {
      state.items.push(coords);
      console.log(state.items);
  }
},
  actions: {
    increment({commit}, data) {
      commit('increment', {
        coords: data
      })
    }
  },
  getters: {
    newMarkers: state => {
      return state.items;
    }}
});



Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
