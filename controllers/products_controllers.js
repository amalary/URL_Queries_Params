const express = require('express'); 

const app = express(); 

const router = express.Router(); 

const products = require('../models/product_model.js'); 





// Middleware 

router.use(express.urlencoded({extended: false}));






// Show Routes

router.post('/', (req,res) => {
    products.create(req.body, (error, createdProduct) => {
        
        if(error) return console.log(error)
    })
    return res.redirect('/products');
});





router.use(express.static('public'))

// this route will catch GET requests to /products/index/ and respond with a single product

router.get('/new',(req,res) => {
    res.render('new.ejs')
});

router.get('/:productId', (req,res) => {
    
    
    products.findById(req.params.productId, (error, foundItem) => {
        if(error) return console.log(error)
        
        const context = {product: foundItem};
        res.render('show.ejs',context);
        
        
        
    })
})
router.get('/:productIndex', (req,res) => {{
    res.send(products[req.params.productIndex]);

}});
router.get('/', (req,res) => {

    const allProducts = products.find(); 

    const context = {products: allProducts}; 
    res.render('index.ejs', context); 
    // res.send(products.find()); 
}); 




router.delete('/:productId', (req,res) => {
    products.findByIdAndDelete(req.params.productId, (error,deletedProduct) => {
        if(error) return console.log(error); 

        console.log(deletedProduct); 
        return res.redirect('/products');
    })
})


module.exports = router; 