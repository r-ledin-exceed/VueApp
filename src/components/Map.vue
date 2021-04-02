<template>
  <div id="map">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" :controls="false" :move-tolerance=10>
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>
    
      <vl-layer-tile>
         <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <template v-for="item in newMarkers" > 
        <vl-overlay :id="overlay+item.coords"  :position="item.coords" :key="item.coords" >
          <Frame :id="uuidv4"/>
        </vl-overlay>
      </template>  

    </vl-map>
  </div>
</template>

<script>
  import Frame from "@/components/Frame"
  // import { mapState } from 'vuex';
  // import { v4 as uuidv4 } from 'uuid';

  export default {
    name: "mainMap",
      
      data () {
        return { 
        zoom: 4,
        center: [0, 0],
        rotation: 0,
        }
    },
      methods: {
        generateID() {
          
        }
    },
      components: {
        Frame,
        // uuidv4
      },
      computed: {
        newMarkers(){
          return this.$store.getters.newMarkers
        }
      }
}
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;

}

.img {
  width:1vw;
}
</style>
