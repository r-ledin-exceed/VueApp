<template>
 <v-card-text id="card">

  <template v-for="(item, index) in markers">
        <div :key="index" class="marker">
        <span>Name -- {{item.name}}</span><br>
        <span>Position -- {{item.position}}</span><br>
        <span>Signal -- {{item.signal}}</span><br>
        </div>
  </template>

</v-card-text>
</template>

<script>

export default {
  
  data () {
    
    return {
      markers: [
      {name:"first", position:[10, 10], signal:"yes"},
      {name:"second", position:[10, 10], signal:"yes"},
      {name:"third", position:[10, 10], signal:"yes"},
      ]
    }
  },
  methods: {
    
  },

}

</script>

<style>
.marker {
    border: 1px solid black;
    padding: 3px;
}
</style>