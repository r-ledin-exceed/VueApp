<template>
 <v-card-text id="card">

    <span>Name: {{information.name}} </span> 
    <v-divider></v-divider>
    <span>Position: {{information.position}} </span>
    <v-divider></v-divider>
    <span>Signal: {{information.signal}} </span> 

</v-card-text>
</template>

<script>

export default {
  
  data () {
    
    return {
      information: {
      name: "Nochnoi Dozor",
      position: "[62.726634, 12.003391]",
      signal: "Yes",       
      }
    }
  },
  methods: {
    
  },

}

</script>

<style>

</style>