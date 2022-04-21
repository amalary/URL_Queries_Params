const express = require('express'); 
const app = express(); 
const PORT = 4000; 



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












