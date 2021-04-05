<template class=""> 
  <v-card width="800">
    <v-card-title class="headline grey lighten-2">
      Video
    </v-card-title>
    <v-divider></v-divider>     
    <v-card-text>
      <video class="mx-auto col" controls="controls">      
      <source :src=urlLabel type="video/mp4">
      </video>
    </v-card-text>  
  </v-card>
</template>


<script>
export default {
  props: ['urlLabel'],
  data() {
      return{
        
      }
  },

}
</script>


<style>

</style>