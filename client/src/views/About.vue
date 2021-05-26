<template>
  <div class="about">
    <Navbar />
    <v-container class="text-center">
      <h1>About page</h1>
      <br>
      <p>
        Web application for traveling between planets. Created by using Vue,
        Vuetify, Express, Docker
      </p>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "About",
  components: { Navbar },
};
</script>
