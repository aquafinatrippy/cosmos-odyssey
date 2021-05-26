const express = require("express");

const pricesRouter = require("./routes/travelprices");
const reservationsRouter = require("./routes/reservations")

const router = express.Router();

router.use("/prices", pricesRouter);
router.use("/reservations", reservationsRouter)

module.exports = router;
