<template>
    <v-dialog 
        class="dialog"
        v-model="dialog"
        width="400"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Information
          </v-card-title>
          1
          <v-card-text>
            Name: "Dozor-Punkt"
            <v-divider></v-divider>
            Position: [62.726634, 12.003391]
            <v-divider></v-divider>
            Signal: Yes
            <v-divider></v-divider>
          </v-card-text>
          
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Watch
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>

export default {
  data () {
    return {
      dialog: false,
    }
  },
}
</script>

<style>

</style>
