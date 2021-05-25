import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedPlanet: "",
    availableRoutes: [],
    endDestination: "",
  },
  mutations: {
    SELECTED_PLANET(state, planet) {
      state.selectedPlanet = planet;
    },
    SET_AVAIBLE_ROUTES(state, routes) {
      state.availableRoutes = routes;
    },
    SET_END_DESTINATION(state, planet) {
      state.endDestination = planet;
    },
  },
  actions: {
    async getPriceList(){
      const {data} = await axios.get('http://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices')
      console.log(data)
    },
    setEndDestination({ commit }, planetname) {
      commit("SET_END_DESTINATION", planetname);
    },
    setSelected({ commit }, planetname) {
      commit("SELECTED_PLANET", planetname);
      switch (planetname) {
        case "mercury":
          commit("SET_AVAIBLE_ROUTES", ["venus"]);
          break;
        case "venus":
          commit("SET_AVAIBLE_ROUTES", ["mercury", "earth"]);
          break;
        case "earth":
          commit("SET_AVAIBLE_ROUTES", ["jupiter"]);
          break;
        case "mars":
          commit("SET_AVAIBLE_ROUTES", ["venus"]);
          break;
        case "jupiter":
          commit("SET_AVAIBLE_ROUTES", ["mars", "venus"]);
          break;
        case "saturn":
          commit("SET_AVAIBLE_ROUTES", ["neptune", "earth"]);
          break;
        case "uranus":
          commit("SET_AVAIBLE_ROUTES", ["saturn", "neptune"]);
          break;
        case "neptune":
          commit("SET_AVAIBLE_ROUTES", ["uranus", "mercury"]);
          break;
        default:
          commit("SELECTED_PLANET", planetname);
      }
    },
  },
  modules: {},
  getters: {
    endDestination: (state) => {
      return state.endDestination;
    },
    selectedPlanet: (state) => {
      return state.selectedPlanet;
    },
    availableRoutes: (state) => {
      return state.availableRoutes;
    },
  },
});
