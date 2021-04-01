<template>
<v-app id="app">
  <v-main>
    <Map/>
    <div class="mapNav">
    <Nav/>
    </div>
  </v-main>
</v-app>
</template>

<script>
import Map from "@/components/Map"
import Nav from "@/components/Nav"

export default {
  name: 'App',
  components: {
    Map,
    Nav
    
  }
}

</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app{
  position: relative;
}

.mapNav {
  position: absolute;
  top: 0;
  right: 0;
  max-height: 500px;
  width: 8em;
}

</style>
