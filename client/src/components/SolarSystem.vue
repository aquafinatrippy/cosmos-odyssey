<template>
  <div>
    <v-row class="planetsRow">
      <div class="sunLocation">
        <Planet
          :PlanetName="planets[0].name"
          :PlanetTexture="planets[0].texture"
        ></Planet>
      </div>
      <v-col
        v-for="(planet, index) in planets.slice(1, planets.length)"
        :key="index"
        class="planetCol"
        :md="index >= 4 ? 2 : 1"
        sm="6"
        cols="12"
        @click="setSelected(planet.name)"
      >
        <Planet :PlanetName="planet.name" :PlanetTexture="planet.texture">
        </Planet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Planet from "./Planet.vue";
import { mapActions } from "vuex";

export default {
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
  methods: {
    ...mapActions(["setSelected"]),
  },
};
</script>

<style lang="scss">
.planetCol {
  position: relative;
  height: 300px;
  cursor: pointer;
  &:hover {
    .planet {
      border: 1px solid aqua;
    }
    p {
      color: aqua;
    }
  }
}
.planetsRow {
  height: 300px;
  margin-top: 10% !important;
}
.sunLocation {
  position: absolute;
  top: -10%;
}
</style>
