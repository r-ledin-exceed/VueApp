<template>
  <div id="map">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" :controls="false" :move-tolerance=10>
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>
    
      <vl-layer-tile>
        <!-- <vl-feature id="point2" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[-75.726634,28.003391]"></vl-geom-point>
        </vl-feature>
        <vl-feature id="point3" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[0,0]"></vl-geom-point>
        </vl-feature>  -->
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-overlay id="adding" :position="[50,50]" >
        <Nav/>
      </vl-overlay>

      <template v-for="item in items" > 
        <vl-overlay v-bind:id="overlay+item.coords"  v-bind:position="item.coords" :key="item.coords">
          <Frame/>
        </vl-overlay>
      </template>  

    </vl-map>
  </div>
</template>

<script>
  import Frame from "@/components/Frame"
  import Nav from "@/components/Nav"

  export default {
    data () {
        return { 
        items: [
          {coords: [-75.726634, 28.003391]}, 
          {coords: [62.726634, 12.003391]},
          {coords: [0, 0]} 
        ],
        zoom: 4,
        center: [0, 0],
        rotation: 0,
        
        }
    },
      methods: {

    },
      components: {
        Frame,
        Nav
      },
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
