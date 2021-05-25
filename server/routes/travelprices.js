const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/prices", async (req, res) => {
  try {
    const url =
      "https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res.send({ data });
      });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
