import express from 'express'
import controller from '../controllers/prices.js'


const router = express.Router()

router.get("/", controller.prices);

export default router;
