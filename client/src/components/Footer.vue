<template>
  <v-footer  color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        @click="$router.push({ name: 'About' })"
        color="white"
        text
        rounded
        class="my-2"
      >
        About page
      </v-btn>
      <v-btn
        @click="$router.push({ name: 'History' })"
        color="white"
        text
        rounded
        class="my-2"
      >
        Travel histroy
      </v-btn>
      <v-col class=" py-4 text-center white--text bottomCol" cols="12">
        {{ new Date().getFullYear() }} — <strong>Aquafinatrippy</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
.bottomCol {
  background: #272727;
}
</style>
