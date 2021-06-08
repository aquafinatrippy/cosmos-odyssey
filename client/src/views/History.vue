<template>
  <div>
    <Navbar />
    <v-container>
      <div style="text-align:center;">
        <h2>Latest reservations</h2>
      </div>
      <div v-if="getLoading" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div v-else-if="historyList.length === 0">
        <h1>No travels booked</h1>
      </div>
      <v-row v-else>
        <v-col
          v-for="history in historyList"
          :key="history._id"
          sm="12"
          cols="12"
          md="4"
        >
          <v-card class="mx-auto" color="primary" dark max-width="400">
            <v-card-text>
              Routes: {{ history.routes }} <br />
              Price: {{ history.totalPrice }} <br />
              travel time: {{ history.travelTime }} days
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "History",
  components: { Navbar },
  methods: { ...mapActions(["getHistory"]) },
  created() {
    this.getHistory();
  },
  computed: {
    ...mapGetters(["historyList", "getLoading"]),
  },
};
</script>
