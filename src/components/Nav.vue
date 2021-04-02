<template>
  <v-dialog data-app
  class="dialog"
  v-model="dialog"
  width="400">

    <template v-slot:activator="{ on, attrs }">
    <v-btn
    color="red lighten-2"
    dark
    v-bind="attrs"
    v-on="on">
        Navigation
    </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Markers
      </v-card-title>

        <AllMarkers v-show="edit === false"/>
        <AddMarker v-show="edit === true"
        @addmarker = "onAddMarker"/>

      <v-divider></v-divider>
        
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        color="primary"
        text
        @click="dialog = false">
        Close
        </v-btn>

        <v-btn v-if="edit === false"
        color="primary"
        text
        @click="edit = true">
        Add marker
        </v-btn>
        <v-btn v-else
        color="primary"
        text
        @click="edit = false; call()">
        Save
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AllMarkers from "@/components/toNav/AllMarkers"
import AddMarker from "@/components/toNav/AddMarker"


export default {
  data () {
    
    return {
      edit: false,
      dialog: false
      }

  },
  methods: {
    call() {
      
    },

    onAddMarker(data) {
      console.log(data, "data")
      this.$store.dispatch('increment', data)
    }
    
   },
  components: {
      AllMarkers,
      AddMarker,
  }
}


</script>