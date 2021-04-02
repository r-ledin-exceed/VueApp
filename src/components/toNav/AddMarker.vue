<template>
<div class="main">
  <v-card-text id="card">

    <!-- MUST BE V-FOR="" -->
    
    <!-- <span>Name:<v-text-field v-model="information.name"></v-text-field></span> 
    <v-divider></v-divider> -->
   
    <!-- ---------------- -->

    <span>Position:<v-text-field v-model="position1"></v-text-field></span>
    <span>Position:<v-text-field v-model="position2"></v-text-field></span>
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
      arr: [+this.position1, +this.position2]
      }
  },
  methods: {
  addingNewMarker() {
    let arr = [+this.position1, +this.position2]
    this.$emit("addmarker", arr)
    console.log(typeof(arr), arr)
    }
  }
}

</script>

<style>

</style>