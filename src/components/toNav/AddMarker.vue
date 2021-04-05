<template>
<div class="main">
  <v-card-text id="card">
    <span>Name:<v-text-field v-model="nameMarkers"></v-text-field></span> 
    <span>Position1:<v-text-field v-model="position1"></v-text-field></span>
    <span>Position2:<v-text-field v-model="position2"></v-text-field></span>
  </v-card-text>

  <v-card-actions>
        <v-btn
        color="primary"
        @click= "show"
        text
        v-on:click="edit=false">
        Back
        </v-btn>
        <v-btn
        color="primary"
        @click = "addingNewMarker"
        text
        v-on:click="edit=false">
        Add marker
        </v-btn>
  </v-card-actions>
</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data () {  
    return {
      position1: '',
      position2: '',
      nameMarkers: '',
      }

  },
  methods: {
  addingNewMarker() {
    const arr = [+this.position1, +this.position2];
    this.$store.dispatch('increment', {arr, namemarker: this.nameMarkers}) //
    const user = JSON.parse(localStorage.getItem('user'));
         user.items.push({
           name: this.nameMarkers,
           coords: arr,
           id: uuidv4(),
           url: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4" 
         });
    localStorage.setItem('user' , JSON.stringify(user));
    console.log(user);
    },
     show() {
      this.$emit("editOne", true)
    },
  }
}

</script>

<style>

</style>