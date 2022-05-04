const express = require('express'); 

const app = express(); 

const router = express.Router(); 

const products = require('../models/product_model.js'); 


// Middleware 

router.use(express.urlencoded({extended: false}))



router.use((req,res, next) => {

    console.log(`${req.method} ${req.originalUrl}`); 

    next(); 
})


// Show Routes

router.post('/products/', (req,res) => {
    products.create(req.body, (error, createdProduct) => {

        if(error) return console.log(error)
    })
    return res.redirect('/products');
})

router.get('/products/new',(req,res) => {
    res.render('new.ejs')
})

// View Code 

app.set('view engine', 'ejs'); 


router.use(express.static('public'))

// this route will catch GET requests to /products/index/ and respond with a single product

router.get('/products/', (req,res) => {

    const allProducts = products.find(); 

    const context = {products: allProducts}; 
    res.render('index.ejs', context); 
    // res.send(products.find()); 
}); 

router.get('/products/:productId', (req,res) => {

    
    products.findById(req.params.productId, (error, foundItem) => {
        if(error) return console.log(error)

        const context = {product: foundItem};
        res.render('show.ejs',context);
        return res.render('show.ejs'); 


    })
})

router.get('/products/:productIndex', (req,res) => {{
    res.send(products[req.params.productIndex]);

}});



module.exports = router; 