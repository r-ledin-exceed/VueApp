<template>
 <v-card-text id="card">

    <span>Name:<v-text-field v-model="editName"></v-text-field></span> 
    <v-divider></v-divider>
    <span>Position1:<v-text-field v-model="position1"></v-text-field></span>
    <v-divider></v-divider>
    <span>Position2:<v-text-field v-model="position2"></v-text-field></span>
    <v-divider></v-divider>

    <v-card-actions>
        <v-btn
        @click="editMarker"
        color="primary"
        text
        >
        Change marker
        </v-btn>
        <v-btn
        color="primary"
        @click ="deleteMarker"
        text
        >
        Delete marker
        </v-btn>
  </v-card-actions>

</v-card-text>


</template>

<script>

export default {
  props: ['oldId'],
  data () { 
    return {
       position1: '',
       position2: '',
       editName: '',
      }
  },
  methods: {
  editMarker(){
    const arr = [+this.position1, +this.position2]
    const user = JSON.parse(localStorage.getItem('user'));
        const index = user.items.findIndex((item) => item.id === this.oldId)
      if (index !== -1) {
        user.items[index].name = this.editName;
        user.items[index].coords = arr;
        localStorage.setItem('user' , JSON.stringify(user));
        console.log(user); 
      }
    this.$emit("editmarker", arr, this.editName, this.oldId)

  },
  deleteMarker() {
    const arr = [+this.position1, +this.position2]
    const user = JSON.parse(localStorage.getItem('user'));
        const index = user.items.findIndex((item) => item.id === this.oldId)
      if (index !== -1) {
        user.items.splice(index, 1)
        localStorage.setItem('user' , JSON.stringify(user));
        console.log(user); 
      }
    this.$emit("editmarker", arr, this.editName, this.oldId)
  }
  
  }
}

</script>

<style>

</style>