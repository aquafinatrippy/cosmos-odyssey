<template>
  <div>
    <SolarSystem />
    <SelectedPlanets />
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
