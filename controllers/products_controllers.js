const express = require('express'); 

const router = express.Router()


//  index route 

router.get('/products/', (req,res) => {
    const allProducts = products.find(); 
    res.render('index.ejs', {products: allProducts})
});

// New Product Form 

router.get('/products/newForm', (req,res) => {
    res.render('new.ejs')
}); 

// Create New Product 

router.post('/products/', (req,res) => {
    products.create(req.body, (error, createdProduct) => {
        if(error) console.log(error)

        console.log(createdProduct)
        res.redirect('/products'); 
    })
});

// Show



module.export = router; 

