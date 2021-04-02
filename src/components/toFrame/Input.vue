<template>
 <v-card-text id="card">

  <!-- MUST BE V-FOR="" -->
    <span>Name:<v-text-field v-model="editName"></v-text-field></span> 
    <v-divider></v-divider>
    <span>Position1:<v-text-field v-model="position1"></v-text-field></span>
    <v-divider></v-divider>
    <span>Position2:<v-text-field v-model="position2"></v-text-field></span>
    <v-divider></v-divider>

    <v-card-actions>
        <v-btn
        @click="editMarker"
        color="primary"
        text
        v-on:click="edit = false">
        Emmit
        </v-btn>
  </v-card-actions>

</v-card-text>


</template>

<script>

export default {
  props: ['oldid'],
  data () { 
    return {
       name: this.editName,
       arr: [+this.position1, +this.position2],
       id: this.oldid,
       position1: '',
       position2: '',
       editName: '',
      }
  },
  methods: {
  editMarker(){
    let arr = [+this.position1, +this.position2]
    let namemarker = this.editName
    let id = this.oldid
    this.$emit("editmarker", arr, namemarker, id)
    console.log(typeof(arr), arr, namemarker, id)
  }
  
  }
}

</script>

<style>

</style>