<template>
  <div class="text-center">
    <v-chip
      v-if="selectedPlanet"
      class="ma-2"
      close
      @click:close="chipStart = false"
    >
      {{ selectedPlanet }}
    </v-chip>

    <v-chip
      v-if="endDestination"
      class="ma-2"
      close
      color="red"
      text-color="white"
      @click:close="chip2 = false"
    >
      {{ endDestination }}
    </v-chip>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectedPlanets",
  data() {
    return {
      chipStart: true,
      chip2: true,
    };
  },
  computed: {
    ...mapGetters(["selectedPlanet", "endDestination"]),
  },
};
</script>
