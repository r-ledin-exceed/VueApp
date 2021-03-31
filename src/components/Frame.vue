<template>
    <v-dialog data-app
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
            {{ dialog }}
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Information
          </v-card-title>
          
          <v-card-text id="card">
            Name: <span class="value active">{{name}}</span> <input type="text" placeholder='write here name' class="input hidden" id="#input1"> 
            <v-divider></v-divider>
            Position: <span class="value active">[62.726634, 12.003391]</span> <input type="text" placeholder='write here coords' class="input hidden" id="#input2">
            <v-divider></v-divider>
            Signal: <span class="value active">Yes</span> <input type="text" placeholder='Signal' class="input hidden" id="#input3">
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
              v-on:click="rename(count)"
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
      name: "Nochnoi Dozor",
      dialog: false,
      
      }

  },
  methods: {
    

  }
}

</script>

<style>
.hidden {
  display: none;
}
</style>
