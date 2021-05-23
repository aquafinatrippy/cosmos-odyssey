<template>
  <v-container>
    <v-row class="planetsRow">
      <v-col
        v-for="(planet, index) in planets"
        :key="index"
        class="planetCol"
        md="6"
        sm="12"
      >
        <Planet :PlanetTexture="planet.texture" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Planet from "./Planet.vue";

export default Vue.extend({
  name: "SolarSystem",

  data: () => ({
    planets: [
      {
        name: "sun",
        texture: "textures/sun.png",
      },
      {
        name: "mercury",
        texture: "textures/mercury.jpg",
      },
      {
        name: "venus",
        texture: "textures/venus.jpg",
      },
      {
        name: "earth",
        texture: "textures/earth.jpg",
      },
      {
        name: "mars",
        texture: "textures/mars.jpg",
      },
      {
        name: "jupiter",
        texture: "textures/jupiter.png",
      },
      {
        name: "saturn",
        texture: "textures/saturn.jpg",
      },
      {
        name: "uranus",
        texture: "textures/uranus.jpg",
      },
      {
        name: "neptune",
        texture: "textures/neptune.jpg",
      },
    ],
  }),
  components: {
    Planet,
  },
});
</script>

<style lang="scss">
.planetCol {
  position: relative;
}
.planetsRow {
  height: 300px;
}
</style>
