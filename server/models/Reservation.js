const mongoose = require("../database");
const validator = require("validator");

const reservationSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  routes: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  travelTime: {
    type: Date,
    required: true,
  },
  travel_provider: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
