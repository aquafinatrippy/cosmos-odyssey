<template>
  <v-container>
    <!-- <v-row class="planetsRow" v-for="k in 3" :key="k">
      <v-col
        v-for="(planet, index) in getRightPlanets(k)"
        :key="index"
        class="planetCol"
        md="4"
        sm="12"
      >
        <Planet :PlanetName="planet.name" :PlanetTexture="planet.texture" />
      </v-col>
    </v-row>

    
    <v-row v-for="j in justify" :key="j" :justify="j">

      <v-col
        v-for="k in 2"
        :key="k"
        :md="j === 'space-between' ? 12 : 4"
      >
        <v-card class="pa-2" outlined tile>
          j = {{ j }}
          One of two columns
        </v-card>
      </v-col>
    </v-row> -->


    <v-row>
      
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
    justify: ["start", "center", "end", "space-around", "space-between"],
  }),
  components: {
    Planet,
  },
  methods: {
    getRightPlanets(row: number): any {
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
}
.planetsRow {
  height: 300px;
}
</style>
