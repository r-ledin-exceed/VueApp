<template :id='idframe'>
  <v-dialog data-app
  class="dialog"
  v-model="dialog"
  width="400">

  <template v-slot:activator="{ on, attrs }">
    <img :src="require('@/assets/maps-and-flags.svg')"
    v-bind="attrs"
    v-on="on"  
    class="img"/>

  </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Information
        </v-card-title>
        
        <Player v-show="playersh === true"/>
        <Table :namelabel="nameframe" :positionlabel="positionframe" v-show="edit === false"/>
        <Input :oldid="idframe" v-show="edit === true"
        @editmarker="editMarker"/>
        
        <v-divider></v-divider>
          
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            text
            @click="playersh = true">
            Watch
          </v-btn>

          <v-btn v-if="edit === false"
            color="primary"
            text
            @click="edit = true">
            Edit
          </v-btn>
          <v-btn v-else
            color="primary"
            text
            @click="edit = false">
            Save
          </v-btn>

        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
  import Table from "@/components/toFrame/Table"
  import Input from "@/components/toFrame/Input"
  import Player from "@/components/toFrame/Player"


  export default {
    props:['nameframe', 'positionframe', `idframe`],
    data () {
      return {
        edit: false,
        dialog: false,
        playersh: false,
        }
    },
    methods: {
      editMarker(arr, namemarker, id,) {
      console.log(arr, namemarker, id, "data")
      this.$store.dispatch('edition', {arr, namemarker, id})
      }
    },
    components: {
      Table,
      Input,
      Player
    }
  }
</script>

<style>
</style>
