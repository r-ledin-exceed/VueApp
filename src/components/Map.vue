<template>
  <div id="map">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" :controls="false" :move-tolerance=10>
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>
    
      <vl-layer-tile>
         <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <template v-for="(item, index) in newMarkers" > 
        <vl-overlay :id="index"  :position="item.coords" :key="item.id" >
          <Frame :idframe="item.id" :nameframe="item.name" :positionframe="item.coords"/>
        </vl-overlay>
      </template>  

    </vl-map>
  </div>
</template>

<script>
  import Frame from "@/components/Frame"

  export default {
    name: "mainMap",
    props:['this.item.id', 'this.item.name', 'this.item.coords'],  
    data () {
      return { 
      zoom: 4,
      center: [0, 0],
      rotation: 0,
      }
    },
      methods: {
      
    },
    components: {
      Frame,
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
