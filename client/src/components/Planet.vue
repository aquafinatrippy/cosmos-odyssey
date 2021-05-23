<template>
  <div class="planet">
    <div class="wrap">
      <div
        class="background"
        :style="` background: url(${PlanetTexture})repeat-x; `"
      ></div>
      <div class="clouds"></div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Planet",
  props: ["PlanetTexture"],
  mounted() {
    console.log(this.PlanetTexture);
  },
});
</script>
