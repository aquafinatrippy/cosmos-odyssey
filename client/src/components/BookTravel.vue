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
        <v-btn class="ma-1" outlined color="primary" @click="test(props.item)">
          Select provider
        </v-btn>
      </template>
      
      
      </v-data-table
    >
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
      { text: "", value: "controls" },
    ],
  }),
  methods: {
    test(x){
      console.log(x)
    }
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
