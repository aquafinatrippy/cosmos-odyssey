const router = require("express").Router();
const Reservation = require("../models/Reservation");

router.get("/reservation", async (req, res) => {
  try {
    const reservations = await Reservation.find({});
    res.send(reservations);
  } catch (error) {
    res.status(400).send(error);
  }
});
