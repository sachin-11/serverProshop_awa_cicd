import express from "express";
import cors from "cors";
import colors from "colors";
import mongoose from "mongoose";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  errorHandler,
  notFound,
} from "../backend/middleware/errorMiddleware.js";
import productRoutes from "../backend/routes/productsRoute.js";

//connect to congig

dotenv.config();

//strict query

mongoose.set("strictQuery", false);

//connect to database
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/products", productRoutes);

//error handler middleware
app.use(notFound)
app.use(errorHandler)
app.use(cors());


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
