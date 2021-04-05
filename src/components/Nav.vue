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

      <AllMarkers v-show="edit"
      @editTwo= "TuEdit"/>
      <AddMarker v-show="!edit"
      @editOne= "OuEdit"
      />

      <v-divider></v-divider>
        
    </v-card>
  </v-dialog>
</template>

<script>
import AllMarkers from "@/components/toNav/AllMarkers"
import AddMarker from "@/components/toNav/AddMarker"


export default {
  data () { 
    return {
      edit: true,
      dialog: false
      }

  },
  methods: {
    TuEdit(editTwo) {
      editTwo = false
      this.edit = editTwo;
      console.log(editTwo);
    },
    OuEdit(editOne) {
      editOne = true
      this.edit = editOne;
      console.log(editOne);
    }
   },

  components: {
    AllMarkers,
    AddMarker,
  }
}


</script>