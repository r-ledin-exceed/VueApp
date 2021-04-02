import Vue from 'vue'
import App from './App.vue'
import { Map, TileLayer, OsmSource, Geoloc, Overlay, Feature } from 'vuelayers'
import 'vuelayers/lib/style.css'
import VueLayers from 'vuelayers'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export
import Vuex from 'vuex'
import UUID from 'vue-uuid'
import { v4 as uuidv4 } from 'uuid';
// import { indexOf } from 'core-js/core/array'

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
      {name:'3rd name', id: uuidv4(), coords: [-75.726634, 28.003391]}, 
      {name:'2nd name', id: uuidv4(), coords: [62.726634, 12.003391]},
      {name:'1st name', id: uuidv4(), coords: [0, 0]} 
    ],
  },
  mutations: {
    increment (state, {coords, id, name}) {
      state.items.push({coords, id, name});
      console.log(state.items);
  },
    edition (state, {coords, id, name}) {
    
        let index = state.items.findIndex((item) => item.id === id)
        console.log(index);
        if (index !== -1) {
        state.items[index].name = name;
        state.items[index].coords = coords;
        console.log(state.items);
      }
    },
  },
  actions: {
    increment({commit}, {arr, namemarker}) {
      commit('increment', {
        coords: arr,
        id: uuidv4(),
        name: namemarker
        })
    },
    edition({commit}, {arr, namemarker, id}) {
      commit('edition', {
        coords: arr,
        name: namemarker,
        id: id
      })
    },
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
