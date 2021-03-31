<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>

      <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
      </vl-layer-tile>



      <vl-feature id="line-string" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-line-string :coordinates="[[10, 10], [20, 20], [30, 10], [40, 20]]"></vl-geom-line-string>
      </vl-feature>

      <vl-feature id="polygon" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-polygon :coordinates="[[[-10, -10], [-20, -20], [-30, -10], [-20, 0], [-10, -10]]]"></vl-geom-polygon>
      </vl-feature>
  </vl-map>
</template>

<script>
  export default {
    data () {
      return { 
        zoom: 2,
        center: [0, 0],
        rotation: 0,
      }
    },
  }
</script>

<script>
  export default {
      el:"#marker",

      data() {
          return {}
      }
  }
</script>

<style>

</style>