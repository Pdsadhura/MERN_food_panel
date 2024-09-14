import { Router } from "express";
import { login, signup } from "../Controller/authUserController.js";
import { loginValidation, signupValidation } from "../Middleware/authUserValidation.js";

const router = Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

export default router;