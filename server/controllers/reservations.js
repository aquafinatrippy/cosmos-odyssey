const Reservation = require("../models/Reservation");

module.exports = {
  getReservations: async (req, res) => {
    try {
      const reservations = await Reservation.find({});
      res.send(reservations);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  postReservation: async (req, res) => {
    try {
      const reservation = new Reservation({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        routes: req.body.routes,
        totalPrice: req.body.totalPrice,
        travelTime: req.body.travelTime,
        travel_provider: req.body.travel_provider,
      });
      await reservation.save();
      res.send(reservation);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
