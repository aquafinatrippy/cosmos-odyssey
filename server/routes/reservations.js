import express from 'express'
import controller from '../controllers/reservations.js'

const router = express.Router()

router.get("/", controller.getReservations);
router.post("/", controller.postReservation);

export default router;
