const router = require("express").Router();
const controller = require("../controllers/prices");

router.get("/", controller.prices);

module.exports = router;
