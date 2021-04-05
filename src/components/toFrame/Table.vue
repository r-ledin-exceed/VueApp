<template>
 <v-card-text id="card">

    <span>Name: {{nameLabel}} </span> 
    <v-divider></v-divider>
    <span>Position: {{positionLabel}} </span>
    <v-divider></v-divider>
    <span>Signal: {{information.signal}} </span> 


</v-card-text>
</template>

<script>

export default {
  props: ['nameLabel', 'positionLabel'],
  data () {
        
    return {
      information: {
      name: "",
      position: "",
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