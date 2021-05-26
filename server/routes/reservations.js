const router = require("express").Router();
const controller = require("../controllers/reservations");

router.get("/", controller.getReservations);
router.get("/", controller.postReservation);

module.exports = router;
