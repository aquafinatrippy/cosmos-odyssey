<template>
  <v-app>
    <div v-if="windowWidth < 960">
      <v-btn
        class="md-5 mr-3 elevation-21 mt-5"
        dark
        fab
        
        right
        color="primary"
        fixed
        @click="top"
      >
        <v-icon>mdi-arrow-up</v-icon></v-btn
      >
    </div>
    <v-main class="starSystem">
      <router-view />
    </v-main>
    <br />
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "@/components/Footer";

export default {
  name: "App",

  data: () => ({
    windowWidth: window.innerWidth,
    txt: "",
  }),
  components: {
    Footer,
  },
  watch: {
    windowWidth(newHeight, oldHeight) {
      this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
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
