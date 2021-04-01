<template>
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
        
        <Table v-show="edit === false"/>
        <Input v-show="edit === true"/>
        
        <v-divider></v-divider>
          
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false">
            Watch
          </v-btn>

          <v-btn v-if="edit === false"
            color="primary"
            text
            v-on:click="edit = true">
            Edit
          </v-btn>
          <v-btn v-else
            color="primary"
            text
            v-on:click="edit = false">
            Save
          </v-btn>

        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
  import Table from "@/components/toFrame/Table"
  import Input from "@/components/toFrame/Input"


  export default {
    data () {
      return {
        edit: false,
        dialog: false
        }
    },
    methods: {
      
    },
    components: {
      Table,
      Input
    }
  }
</script>

<style>
</style>
