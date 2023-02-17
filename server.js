const express = require('express');
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const productsRoutes = require('../backend/routes/productsRoute')

//connect to congig

dotenv.config();

//strict query

mongoose.set("strictQuery", false);

//connect to database
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running.");
});

app.use(cors());

app.use("/products", productsRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
