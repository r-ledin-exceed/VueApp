<template>
  <div id="map">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" :controls="false" :move-tolerance=10>
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" projection="EPSG:4326"></vl-view>  
      <vl-layer-tile>
         <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    


      <vl-overlay v-if="auth"
      class="auth"
      :position="center">
        <Auth
        @authDone = "authCompleted"/>
      </vl-overlay>

      <template v-else
      v-for="(item, index) in newMarkers" > 

        <vl-overlay 
        :id="index"  
        :position="item.coords" 
        :key="item.id" >

          <Frame 
          :id-frame="item.id" 
          :name-frame="item.name" 
          :position-frame="item.coords"
          :url-frame="item.url"/>

        </vl-overlay>

      </template>  

    </vl-map>
  </div>
</template>

<script>
  import Frame from "@/components/Frame"
  import Auth from "@/components/Auth"

  export default {
    name: "mainMap",
    data () {
      return { 
      zoom: 4,
      center: [0, 0],
      rotation: 0,
      auth: true
      }
    },
      methods: {
        authCompleted(authDone) {
          this.auth = authDone
        }
      },
      mounted() {
        const user = localStorage.getItem("user")
        if (user) {
          this.auth = false
        } else {
          this.auth = true;
        }
      },
    components: {
      Frame,
      Auth
    },
    computed: {
      newMarkers() {
        return this.$store.getters.newMarkers
      },
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

.auth {
  margin: -100px;
}
</style>
