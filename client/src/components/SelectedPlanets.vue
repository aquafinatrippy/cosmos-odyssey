<template>
  <div class="text-center">
    <v-chip
      v-if="selectedPlanet"
      class="ma-2"
      close
      @click:close="!endDestination ? setSelected('') : {}"
    >
      {{ selectedPlanet }}
    </v-chip>

    <v-chip
      v-if="endDestination"
      class="ma-2"
      close
      color="red"
      text-color="white"
      @click:close="setEndDestination('')"
    >
      {{ endDestination }}
    </v-chip>
    <div>
      <div v-if="!selectedPlanet">
        <h3>Select start destination</h3>
      </div>
      <div v-if="!endDestination && selectedPlanet">
        <h3>Select end destination</h3>
      </div>
      <div v-if="selectedPlanet && endDestination">
        <h3>Confirm and continue</h3>
      </div>
    </div>
    <div v-if="endDestination && selectedPlanet">
      <v-btn
        @click="
          getPriceList();
          $router.push({ name: 'Reservation' });
        "
        color="success"
      >
        Book travel
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SelectedPlanets",
  data() {
    return {
      chipStart: true,
      chip2: true,
      dialog: false,
    };
  },
  computed: {
    ...mapGetters(["selectedPlanet", "endDestination"]),
  },
  methods: {
    ...mapActions(["getPriceList", "setEndDestination", "setSelected"]),
  },
};
</script>
