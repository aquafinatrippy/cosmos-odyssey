import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedPlanet: "",
    availableRoutes: [],
    endDestination: "",
    pricelist: [],
    feedback: ""
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
    SET_PRICELIST(state, pricelist) {
      state.pricelist = pricelist;
    },
    SET_FEEDBACK(state, text){
      state.feedback = text;
    }
  },
  actions: {
    async getPriceList({ commit }) {
      const { data } = await axios.get("http://localhost:8000/api/prices");
      commit("SET_PRICELIST", data.pricelist.legs);
    },
    async createReservation({commit}, reservationInfo){
      try {
        await axios.post('localhost:8000/api/reservations', {
          firstName: reservationInfo.firstname,
          lastName: reservationInfo.lastname,
          routes: reservationInfo.routes,
          totalPrice: reservationInfo.price,
          travelTime: reservationInfo.travelTime,
          travel_provider: reservationInfo.company
        })
        commit("SET_FEEDBACK", 'success')
      } catch (error) {
        commit("SET_FEEDBACK", error)
      }
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
    getPricelist: (state) => {
      return state.pricelist;
    },
    flightSelection: (state) => {
      let StartnameCapitalized =
        state.selectedPlanet.charAt(0).toUpperCase() +
        state.selectedPlanet.slice(1);
      let EndnameCapitalized =
        state.endDestination.charAt(0).toUpperCase() +
        state.endDestination.slice(1);

      return state.pricelist.filter(
        (price) =>
          price.routeInfo.from.name === StartnameCapitalized &&
          price.routeInfo.to.name === EndnameCapitalized
      );
    },
  },
});
