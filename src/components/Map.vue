<template>
<div id="map">
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" :controls="false" :move-tolerance=10>
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>
    
      <vl-layer-tile>

        <vl-feature id="point2" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[-75.726634,28.003391]"></vl-geom-point>
        </vl-feature>

        <vl-feature id="point3" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[0,0]"></vl-geom-point>
        </vl-feature> 

          <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

                                          <vl-overlay id="overlay"  :position="overlayCoordinate">
                                            <img :src="require('../assets/maps-and-flags.svg')" @click="() => {tester()}" class="img"/>
                                              <Frame/> 
                                          </vl-overlay>
                                            
        <!-- <vl-overlay id="overlay2" :position="overlayCoordinate2">
        <div class="overlay-frame">
          Information<br><br>
          Name: "Dozor-Punkt"<br>
          Position: [-75.726634,28.003391]<br>
          Signal: Yes<br>
          <div class="buttons">
            <button>Watch</button>
            <button>Edit</button>
          </div>
        </div>
    </vl-overlay> -->


  </vl-map>
</div>
</template>

<script>
import Frame from "@/components/Frame"

  export default {
    data () {
      // coords: { value: },
      return { 
        zoom: 4,
        center: [0, 0],
        rotation: 0,
        overlayCoordinate: [62.726634,12.003391],
        overlayCoordinate2: [-75.726634,28.003391],
      }
    },
      methods: {
        tester: function() {
          alert("1");
        }
    },
      components: {
        Frame
      },
}
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;
}

.img {
  background-color: #fff;
  width:1vw;
}
</style>
