<template>
  <div>
    <div class="planet" :id="PlanetName">
      <div class="wrap">
        <div
          class="background"
          :style="{
            background:
              'url(' + require(`@/assets/${PlanetTexture}`) + ') repeat-x',
          }"
        ></div>
        <div class="clouds"></div>
      </div>
      <div class="mask"></div>
    </div>
    {{ PlanetName }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Planet",
  props: ["PlanetTexture", "PlanetName"],
});
</script>

<style lang="scss">
#sun {
  width: 300px;
  height: 300px;
  cursor: none;
}
</style>
