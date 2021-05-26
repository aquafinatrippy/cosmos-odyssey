const express = require("express");

const pricesRouter = require("./routes/travelprices");

const router = express.Router();

router.use("/prices", pricesRouter);

module.exports = router;
