<template>
  <div>
    <v-row class="planetsRow">
      <v-col
        v-for="(planet, index) in planets"
        :key="index"
        class="planetCol"
        :md="index >= 4 ? 2 : 1"
        sm="6"
        xs="12"
      >
        <Planet :PlanetName="planet.name" :PlanetTexture="planet.texture" />
      </v-col>
    </v-row>

    <v-row> </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Planet from "./Planet.vue";

export default Vue.extend({
  name: "SolarSystem",

  data: () => ({
    planets: [
      // {
      //   name: "sun",
      //   texture: "textures/sun.png",
      // },
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
  methods: {
    getRightPlanets(row: number) {
      if (row === 1) {
        return this.planets.slice(0, 3);
      }
      if (row === 2) {
        return this.planets.slice(3, 6);
      }
      return this.planets.slice(6, 9);
    },
  },
});
</script>

<style lang="scss">
.planetCol {
  position: relative;
  height: 300px;
}
.planetsRow {
  height: 300px;
}
</style>
