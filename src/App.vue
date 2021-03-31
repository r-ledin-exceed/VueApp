<template>
<v-app id="app">
  <v-main>
    <Map/>
  </v-main>
</v-app>
</template>

<script>
import Map from "@/components/Map"


export default {
  name: 'App',
  components: {
    Map,
    
  }
}

</script>

<style>
*{
  padding: 0;
  margin: 0;
}

</style>
