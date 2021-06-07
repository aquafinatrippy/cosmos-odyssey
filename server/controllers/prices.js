// import fetch from "node-fetch";
import TravelPrices from "../TravelPrices.js";

export default {
  prices: async (req, res) => {
    try {
      // console.log(TravelPrices);
      //   const url =
      //     "https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices";
      //   let response = await fetch(url);
      //   const pricelist = await response.json();
      res.send({ TravelPrices });
    } catch (error) {
      res.send(TravelPrices);
    }
  },
};
