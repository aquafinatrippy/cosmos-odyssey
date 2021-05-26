<template>
  <div>
    <v-data-table
      dense
      item-key="name"
      :items="providers"
      :headers="headers"
      class="elevation-1"
    >
      <template v-slot:item.controls="props">
        <v-dialog v-model="x" width="80%" :retain-focus="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="ma-2" color="primary" v-bind="attrs" v-on="on">
              Select provider
            </v-btn>
          </template>
          <ReservationForm :flightData="props.item" />
        </v-dialog>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import ReservationForm from "./ReservationForm";

export default {
  name: "BookTravel",
  data: () => ({
    headers: [
      { text: "Company", value: "companyName" },
      { text: "Price", value: "price" },
      { text: "Distance", value: "distance" },
      { text: "Travel time(days)", value: "travelTime" },
      { text: "", value: "controls" },
    ],
  }),
  components: { ReservationForm },
  methods: {
    test(x) {
      console.log(x);
    },
  },
  computed: {
    ...mapGetters(["flightSelection"]),
    providers() {
      return this.flightSelection[0]?.providers?.map((provider) => ({
        price: `${provider.price}€`,
        companyName: provider.company.name,
        distance: this.flightSelection[0]?.routeInfo?.distance + " km",
        travelTime: moment(provider?.flightEnd).diff(
          provider?.flightStart,
          "days"
        ),
      }));
    },
  },
};
</script>
