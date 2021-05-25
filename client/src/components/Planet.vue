<template>
  <div :class="this.selectedPlanet === '' ? 'allSelectable' : 'otherDisabled'">
    <div
      @click="
        selectedPlanet != '' && canTravelTo ? setEndDestination(PlanetName) : {}
      "
      :class="canTravelTo === true ? 'travelAble planetRoot' : 'planetRoot'"
    >
      <div
        :class="
          this.selectedPlanet === PlanetName ? 'planet activated' : 'planet '
        "
        :id="PlanetName"
      >
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Planet",
  props: ["PlanetTexture", "PlanetName"],
  methods: {
    ...mapActions(["setEndDestination"]),
  },
  computed: {
    ...mapGetters(["selectedPlanet", "availableRoutes"]),
    canTravelTo() {
      const located = (element) => element === this.PlanetName;
      return this.availableRoutes.some(located);
    },
  },
};
</script>

<style lang="scss">
.otherDisabled {
  width: 100%;
  height: 100%;
  .planet {
    filter: grayscale(100%);
    cursor: not-allowed;
  }
  .travelAble {
    width: 100%;
    height: 100%;
    .planet {
      filter: contrast(200%) !important;
      cursor: pointer;
    }
  }
}
.activated {
  border: 1px solid aqua;
  filter: hue-rotate(90deg) !important;
  p {
    color: aqua !important;
  }
}
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
  filter: contrast(200%);
}
#jupiter,
#saturn {
  .background,
  .clouds {
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
  margin: auto;
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
  .background,
  .clouds {
    width: 90px;
    height: 90px;
  }
}
</style>
