import express from "express";

import pricesRouter from "./routes/travelprices.js";
import reservationsRouter from "./routes/reservations.js";
import userRouter from "./routes/user.js";

const router = express.Router();

router.use("/prices", pricesRouter);
router.use("/reservations", reservationsRouter);
router.use("/auth", userRouter);

export default router;
