<template>
  <div class="planetRoot">
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
    <p class="planetName">{{ PlanetName.toUpperCase() }}</p>
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
.planetRoot {
  text-align: center;
}
.planetName {
  position: absolute;
  bottom: 0;
  width: 100%;
}
#sun {
  width: 300px;
  height: 300px;
  cursor: none;
}
#jupiter,
#saturn {
  .background {
    width: 160px;
    height: 160px;
  }
}
#mercury {
  width: 50px;
  height: 50px;
  margin-top: 50%;
  .background {
    width: 50px;
    height: 50px;
  }
}
#venus {
  margin-top: 40%;
  width: 70px;
  height: 70px;
  .background {
    width: 70px;
    height: 70px;
  }
}
#earth {
  width: 75px;
  height: 75px;
  margin-top: 35%;
  .background {
    width: 75px;
    height: 75px;
  }
}
#mars {
  width: 60px;
  height: 60px;
  bottom: 20px;
  .background {
    width: 60px;
    height: 60px;
  }
}
#uranus,
#neptune {
  width: 90px;
  height: 90px;
  .background {
    width: 90px;
    height: 90px;
  }
}
</style>
