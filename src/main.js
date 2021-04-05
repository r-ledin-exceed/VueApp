import Vue from 'vue'
import App from './App.vue'
import { Map, TileLayer, OsmSource, Geoloc, Overlay, Feature } from 'vuelayers'
import 'vuelayers/lib/style.css'
import VueLayers from 'vuelayers'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';

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

    ]
  },
  mutations: {
    increment (state, {coords, id, name, url}) {
      state.items.push({coords, id, name, url});
      console.log('записано в storage',state.items);
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
    increment({commit}, {arr, namemarker, urlUser}) {
      commit('increment', {
        coords: arr,
        id: uuidv4(),
        name: namemarker,
        url: urlUser
        })
    },
    edition({commit}, {arr, namemarker, id, urlUser}) {
      commit('edition', {
        coords: arr,
        name: namemarker,
        id: id,
        url: urlUser,
      })
    },
  },

  getters: {
    newMarkers: () => {
      const user = JSON.parse(localStorage.getItem('user'))
      return user.items;
    },
  },
});



Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
