<template>
<div class="main">
  <v-card-text id="card">

    <!-- MUST BE V-FOR="" -->
    
    <span>Name:<v-text-field v-model="nameMarkers"></v-text-field></span> 
    <v-divider></v-divider>
   
    <!-- ---------------- -->

    <span>Position1:<v-text-field v-model="position1"></v-text-field></span>
    <span>Position2:<v-text-field v-model="position2"></v-text-field></span>
    <!-- <v-divider></v-divider>
    <span>Signal: <v-text-field v-model="information.signal"></v-text-field> </span>  -->

  </v-card-text>

  <v-divider></v-divider>

  <v-card-actions>
        <v-btn
        @click="addingNewMarker"
        color="primary"
        text
        v-on:click="edit = false">
        Emmit
        </v-btn>
  </v-card-actions>
</div>
</template>

<script>

export default {
  data () {  
    return {
      arr: [+this.position1, +this.position2],
      namemarker: this.nameMarkers,
      position1: '',
      position2: '',
      nameMarkers: '',
      }

  },
  methods: {
  addingNewMarker() {
    let arr = [+this.position1, +this.position2]
    let namemarker = this.nameMarkers
    this.$emit("addmarker", arr, namemarker)
    console.log(typeof(arr), arr, namemarker)
    }
  }
}

</script>

<style>

</style>