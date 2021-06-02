import Reservation from "../models/Reservation.js";

export default {
  getReservations: async (req, res) => {
    try {
      const reservations = await Reservation.find({})
        .sort({ $natural: -1 })
        .limit(15);
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
        expireAt: req.body.expireAt,
      });
      await reservation.save();
      res.send(reservation);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
