import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authUserRouters from "./Routes/authUserRouter.js";
import foodItemsRouter from "./Routes/foodItemsRouter.js";
import productRouters from "./Routes/productRouters.js";
import dotenv from "dotenv";
import './config.js';  // Ensure your config file path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Connected on PORT ${PORT}`);
});

app.use(bodyParser.json());
app.use(cors());

app.use("/Auth", authUserRouters);
app.use("/api/Foods", foodItemsRouter );
app.use("/Images", express.static("Uploads"));
app.use("/Products", productRouters);

app.get("/pong", (req, res) => {
  res.send("pong");
});
