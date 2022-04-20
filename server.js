const express = require('express'); 
const app = express(); 
const PORT = 4000; 
// temporary, simulated database

const products = [
    {
    name: 'Boyfriend Jeans',
    price: 168,
    image:
    'https://cdn.shopify.com/s/files/1/1176/4142/products/2015-06-11-Ashley_Look11_50080_23637.jpg?v=1471037731',
  }, {
      name: 'Knitted Cashmere Pullover',
      price: 418.60,
      image:
  'https://cdn.shopify.com/s/files/1/1176/4142/products/Look_08_21926_0541_1.jpg?v=1471032586',
  }, {
      name: 'Azur Bracelet in Blue Azurite',
      price: 168,
      image:
  'https://cdn.shopify.com/s/files/1/1176/4142/products/2015-05-08_Laydown_Look2_14120_21584.jpg?v=1471027398',
  }, ];


// routes/controllers


// show route 
// this route will catch GET requests to /products/index/ and respond with a single product

app.get('/products/:productIndex', (req,res) => {{
    res.send(products[req.params.productIndex]);

}});

// Index Route 
// this route will catch GET requests to /products/ and respond with all the products

app.get('/products/', (req,res) => {
    res.send(products)
})


app.listen(PORT, () => console.log(`Listen for client request on port ${PORT}`)); 












