const fetch = require("node-fetch");

module.exports = {
  prices: async (req, res) => {
    try {
      const url =
        "https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices";
      let response = await fetch(url);
      const pricelist = await response.json();
      res.send({ pricelist });
    } catch (error) {
      res.send(error);
    }
  },
};
