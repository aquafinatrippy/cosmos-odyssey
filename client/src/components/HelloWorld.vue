<template>
  <div class="solarSystem">
    <Planet
      PlanetTexture="https://st2.depositphotos.com/7671398/10659/i/950/depositphotos_106592906-stock-photo-red-planet-mars-texture.jpg"
    />
    <br>
    <Planet
    PlanetTexture="https://web.cortland.edu/flteach/civ/davidweb/images/earthmab.jpg"
     />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Planet from "./Planet.vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({}),
  components: {
    Planet,
  },
});
</script>
