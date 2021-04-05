<template>
<div class="main">
  <v-card-text id="card">
    <span>Name:<v-text-field v-model="nameMarkers"></v-text-field></span> 
    <span>Position1:<v-text-field v-model="position1"></v-text-field></span>
    <span>Position2:<v-text-field v-model="position2"></v-text-field></span>
  </v-card-text>

  <v-card-actions>
        <v-btn
        @click="addingNewMarker"
        color="primary"
        text
        v-on:click="edit = false">
        Add marker
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