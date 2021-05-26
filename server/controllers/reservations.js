const Reservation = require("../models/Reservation");

module.exports = {
	tickets: async (req, res) => {
        try {
          const reservations = await Reservation.find({});
          res.send(reservations);
        } catch (error) {
          res.status(400).send(error);
        }
      }
};