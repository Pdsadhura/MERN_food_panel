import { Router } from "express";
import { addFood , fetchFoodItems ,removeFoodItem } from "../Controller/foodItemsController.js";
import { foodItemValidation } from "../Middleware/foodItemsValidation.js";
import { errorMiddleware } from "../Middleware/imageValidate.js";

const router = Router();

router.post("/add-items", errorMiddleware , addFood
);
router.get("/fetch-items",fetchFoodItems
);
router.post("/delete-items",removeFoodItem
);

export default router;
