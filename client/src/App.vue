<template>
  <v-app>
    <v-main class="starSystem">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "@/components/Footer";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Footer,
  },
  computed: {
    ...mapGetters(["getPricelist"]),
  },
};
</script>

<style lang="scss">
.starSystem {
  background: url("~@/assets/starSystem.jpg");
  height: auto;
  background-size: cover;
}
</style>
