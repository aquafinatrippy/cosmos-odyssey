<template>
  <v-app>
    <v-main class="starSystem">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.starSystem {
  background: url("~@/assets/starSystem.jpg");
  height: 100%;
  background-size: cover;
}
</style>
