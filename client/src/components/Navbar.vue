<template>
  <v-toolbar dense>
    <v-btn tile color="primary" @click="$router.push({ name: 'Home'})">
      <v-icon left>
        mdi-arrow-left-circle
      </v-icon>
      Back
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
