<template>
  <v-card-text id="card">
    <template v-for="(item, index) in newMarkers">
      <div
        :key="index"
        class="marker"
      >
        <span>Name -- {{ item.name }}</span><br>
        <span>Position -- {{ item.coords }}</span><br>
        <span>Signal -- Yes</span><br>
      </div>
    </template>

    <v-btn @click="show">
      Switch
    </v-btn>
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    newMarkers() {
      return this.$store.getters.newMarkers;
    },
  },
  methods: {
    show() {
      this.$emit('editTwo', false);
    },
  },
};
</script>

<style>
  .marker {
    border: 1px solid black;
    padding: 3px;
    margin: 3px;
  }
</style>
