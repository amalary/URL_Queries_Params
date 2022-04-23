const express = require('express'); 
const app = express(); 
const PORT = 4000; 
const products = require('./models/product_model.js'); 






// Middleware 

app.use(express.urlencoded({extended: false}))



app.use((req,res, next) => {

    console.log(`${req.method} ${req.originalUrl}`); 

    next(); 
})


// Show Routes

app.post('/products/', (req,res) => {
    products.create(req.body, (error, createdProduct) => {

        if(error) return console.log(error)
    })
    console.log(createdProduct);
    console.log(products); 
    res.send('data recieved')
})

app.get('/products/new',(req,res) => {
    res.render('new.ejs')
})

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

        const context = {product: foundProduct};
        res.render('show.ejs',context);
        return res.render('show.ejs'); 


    })
})

app.get('/products/:productIndex', (req,res) => {{
    res.send(products[req.params.productIndex]);

}});




// 404

app.get('/*', (req,res) => {
    const context = {error: req.error}; 
    // if(error){
    //     console.log(error);
    //     req.error = error; 
    //     return next();
    // }
    return res.status(404).render('404', context); 
})

// Index Route 
// this route will catch GET requests to /products/ and respond with all the products
app.listen(PORT, () => console.log(`Listen for client request on port ${PORT}`)); 















