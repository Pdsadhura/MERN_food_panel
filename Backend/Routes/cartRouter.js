import { Router } from "express";
import { addItemsInCart, fetchCartData, removeItemsFromCart } from "../Controller/cartController.js";
import { sessionValidation } from "../Middleware/sessionValidation.js";


const router = Router();

router.post("/add-to-cart" ,sessionValidation , addItemsInCart)

router.post("/delete-from-cart" ,sessionValidation , removeItemsFromCart)

router.get("/get-cart-data" ,sessionValidation , fetchCartData)


export default router;

