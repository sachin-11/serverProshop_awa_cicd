const express = require('express')
const cors = require('cors');
const products = require('./data/products')

const app = express()

app.use(cors())

app.get('/test', (req, res) => {
  res.send('API is running')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(3000, console.log('Server running on port 3000'))