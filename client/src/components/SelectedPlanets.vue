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
          dialog = true;
          getPriceList();
        "
        color="success"
      >
        Book travel
      </v-btn>
    </div>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Make reservation</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
        <BookTravel />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BookTravel from "./BookTravel";

export default {
  name: "SelectedPlanets",
  data() {
    return {
      chipStart: true,
      chip2: true,
      dialog: false,
    };
  },
  components: {
    BookTravel,
  },
  computed: {
    ...mapGetters(["selectedPlanet", "endDestination"]),
  },
  methods: {
    ...mapActions(["getPriceList", "setEndDestination", "setSelected"]),
  },
};
</script>
