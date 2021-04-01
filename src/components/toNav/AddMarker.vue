<template>
 <v-card-text id="card">

  <!-- MUST BE V-FOR="" -->
    
    <span>Name:<v-text-field v-model="information.name"></v-text-field></span> 
    <v-divider></v-divider>
   
  <!-- ---------------- -->

    <span>Position:<v-text-field v-model="information.position"></v-text-field></span>
    <v-divider></v-divider>
    <span>Signal: <v-text-field v-model="information.signal"></v-text-field> </span> 

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
  
      
  
  }
}

</script>

<style>

</style>