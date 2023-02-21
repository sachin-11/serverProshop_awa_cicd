const express = require('express');
const path = require('path');
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const morgan = require('morgan');
const productsRoutes = require('./routes/productsRoute')
const orderRoutes = require('./routes/orderRoutes.js')
const userRoutes = require('./routes/userRoutes')
const uploadRoutes = require( './routes/uploadRoutes')

//connect to congig

dotenv.config();

//strict query

mongoose.set("strictQuery", false);

//connect to database
connectDB();

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/user", userRoutes);
app.use('/orders', orderRoutes)
app.use('/upload', uploadRoutes)

app.get('/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

// process.setMaxListeners(0);

const __variableOfChoice = path.resolve()
app.use('/uploads', express.static(path.join(__variableOfChoice, '/uploads')))


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
