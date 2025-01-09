import { Router } from "express";
import {sessionValidation } from "../Middleware/sessionValidation.js";
import  orderController  from "../Controller/orderController.js";





const router = Router();

router.post("/order",sessionValidation ,orderController)


export default router