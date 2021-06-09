import express from "express";
import controller from "../controllers/user.js";
import checkAPIs from "express-validator";
import auth from "../middlewares/authJwt.js";

const { check } = checkAPIs;

const router = express.Router();

router.get("/current", auth, controller.currentUser);

router.post(
  "/register",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  controller.registerUser
);

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  controller.loginUser
);

export default router;
