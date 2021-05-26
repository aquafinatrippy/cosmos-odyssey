<template>
  <div>
    Travel companies info
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BookTravel",
  computed: {
    ...mapGetters(["flightSelection"]),
  },
  mounted() {
    console.log(this.flightSelection);
    console.log("test")
  },
};
</script>
