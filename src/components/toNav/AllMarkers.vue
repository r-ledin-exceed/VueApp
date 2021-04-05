<template>
 <v-card-text id="card">

  <template v-for="(item, index) in newMarkers">
        <div :key="index" class="marker">
        <span>Name -- {{item.name}}</span><br>
        <span>Position -- {{item.coords}}</span><br>
        <span>Signal -- Yes</span><br>
        </div>
  </template>

</v-card-text>
</template>

<script>
export default {
  data () {   
    return {
    }
  },
  methods: {
    
  },
  computed: {
    newMarkers(){
      return this.$store.getters.newMarkers
    }
  }
}
</script>

<style>
  .marker {
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
  }
</style>