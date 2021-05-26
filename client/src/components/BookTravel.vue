<template>
  <div>
    <v-data-table
      dense
      item-key="name"
      :items="providers"
      :headers="headers"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "BookTravel",
  data: () => ({
    headers: [
      { text: "Company", value: "companyName" },
      { text: "Price", value: "price" },
      { text: "Distance", value: "distance" },
      { text: "Travel time(days)", value: "travelTime" },
    ],
  }),
  computed: {
    ...mapGetters(["flightSelection"]),
    providers() {
      return this.flightSelection[0]?.providers?.map((provider) => ({
        price: provider.price,
        companyName: provider.company.name,
        distance: this.flightSelection[0]?.routeInfo?.distance,
        travelTime: moment(provider?.flightEnd).diff(
          provider?.flightStart,
          "days"
        ),
      }));
    },
  },
};
</script>
