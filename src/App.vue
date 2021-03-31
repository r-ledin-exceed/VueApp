<template>
  <div id="app">
    <Marker/>
    <Map/>
  </div>
</template>

<script>
import Map from "@/components/Map"
import Marker from "@/components/Marker"

export default {
  name: 'App',
  components: {
    Map,
    Marker
  }
}

</script>

<style>
*{
  padding: 0;
  margin: 0;
}

</style>
