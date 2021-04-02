<template class=""> 
      <v-card width="800">
        <v-card-title class="headline grey lighten-2">
          Video
        </v-card-title>
        
        
        <v-divider></v-divider>
          
        <v-card-actions>

          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            text
            @click="playersh = false">
            Close
          </v-btn>

        </v-card-actions>
      </v-card>

</template>


<script>
export default {
    data() {
        return{
         playersh: false,
        }
    },

   
}
</script>


<style>

</style>