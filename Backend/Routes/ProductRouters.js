import { Router } from "express";
import { sessionValidation } from "../Middleware/sessionValidation.js";

const router = Router();

router.get("/", sessionValidation, (req, res) => {
  res.status(200).json({
    data: [
      { name: "mobile", price: "2200" },
      { name: "tv", price: "22000" }
    ],
    user_info: req.user
  });
});

export default router;
