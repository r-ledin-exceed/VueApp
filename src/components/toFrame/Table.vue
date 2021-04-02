<template>
 <v-card-text id="card">

    <span>Name: {{namelabel}} </span> 
    <v-divider></v-divider>
    <span>Position: {{positionlabel}} </span>
    <v-divider></v-divider>
    <span>Signal: {{information.signal}} </span> 


</v-card-text>
</template>

<script>

export default {
  props: ['namelabel', 'positionlabel'],
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