<template>
<div id="map">
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" :controls="false" :move-tolerance=10>
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>
    
      <vl-layer-tile>

        <vl-feature id="point" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[-32, -12]"></vl-geom-point>
        </vl-feature>

        <vl-feature id="point2" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[-75.726634,28.003391]"></vl-geom-point>
        </vl-feature>

        <vl-feature id="point3" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[62.726634,12.003391]"></vl-geom-point>
        </vl-feature>

          <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

  </vl-map>
</div>
</template>

<script>
  export default {
    data () {
      return { 
        zoom: 4,
        center: [0, 0],
        rotation: 0,
      }
    },
      methods: {
  },
}
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;
}
#point {
  background-color: black;
}
</style>
