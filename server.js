const express = require('express');
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const productsRoutes = require('./routes/productsRoute')
const userRoutes = require('./routes/userRoutes')

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
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/user", userRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
