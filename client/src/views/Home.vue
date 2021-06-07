<template>
  <div>
    <v-card  rounded class="mx-auto mt-5" max-width="344" height="150" outlined>
      <v-card-text><SelectedPlanets /></v-card-text>
    </v-card>
    <SolarSystem />
  </div>
</template>

<script>
import SolarSystem from "../components/SolarSystem";
import SelectedPlanets from "../components/SelectedPlanets";

export default {
  name: "Home",

  components: {
    SolarSystem,
    SelectedPlanets,
  },
};
</script>
