import mongoose from "../database.js";

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
    type: String,
    required: true,
  },
  travelTime: {
    type: Number,
    required: true,
  },
  travel_provider: {
    type: String,
    required: true,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
