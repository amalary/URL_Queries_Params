const express = require('express'); 
const app = express(); 
const PORT = 4000; 
// temporary, simulated database
const products = ['t-shirt', 'shoes', 'necklace']; 


// routes/controllers


// show route 
// this route will catch GET requests to /products/index/ and respond with a single product

app.get('/products/:productIndex', (req,res) => {{
    res.send(products[req.params.productIndex]);
    
}});


app.listen(PORT, () => console.log(`Listen for client request on port ${PORT}`)); 












