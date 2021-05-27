import express from 'express'

import pricesRouter from './routes/travelprices.js'
import reservationsRouter from './routes/reservations.js'

const router = express.Router();

router.use("/prices", pricesRouter);
router.use("/reservations", reservationsRouter)



export default router;
