<template>
  <v-container>
    <SolarSystem />
    
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SolarSystem from "../components/SolarSystem.vue";

export default Vue.extend({
  name: "Home",

  components: {
    SolarSystem,
  },
});
</script>
