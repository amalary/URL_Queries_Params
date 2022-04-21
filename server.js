const express = require('express'); 
const app = express(); 
const PORT = 4000; 
const products = require('./models/product_model.js'); 



// routes/controllers


// show route 

// View Code 

app.set('view engine', 'ejs'); 

app.use(express.static('public'))

// this route will catch GET requests to /products/index/ and respond with a single product

app.get('/products/', (req,res) => {
    const allProducts = products.find(); 

    const context = {products: allProducts}; 
    res.render('index.ejs', context); 
    // res.send(products.find()); 
}); 




app.get('/products/:productId', (req,res) => {
    products.findById(req.params.productId, (error, foundItem) => {
        if(error) return console.log(error)

        return res.send(foundItem); 
    })
})

app.get('/products/:productIndex', (req,res) => {{
    res.send(products[req.params.productIndex]);

}});

// Index Route 
// this route will catch GET requests to /products/ and respond with all the products



app.listen(PORT, () => console.log(`Listen for client request on port ${PORT}`)); 












