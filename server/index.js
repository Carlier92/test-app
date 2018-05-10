const express = require('express')
const app = express()

var bodyParser = require('body-parser')

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING
}, {
  tableName: 'products',
  timestamps: false
})



app.get('/products', (request, response) => {
    Product.findAll({
      attributes: ['id', 'name', 'price']
    })
    .then(products => {
    response.send({ products })
    })
    .catch(err => {
        response.status(404).send({
            message: 'Products not found!'
        })
    })
})


app.get('/products/:id', (request, response) => {
    const productId = request.params.id
    Product.findById(productId)
    .then(products => {
    response.send(products)
    })
})

app.post('/products', (req, res) => {
  const product = req.body
  console.log(product)

  // ... insert the new data into our database
  Product.create( product )
  res.end()
})









// Product.findById(1).then(product => console.log(JSON.stringify(product)))
