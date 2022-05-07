
const express = require('express'); 
const app = express(); 
const PORT = 4000; 

const router = express.Router();

const methodOverride = require('method-override'); 

const productsCtrlrs = require('./controllers/products_controllers')





app.use('/products', productsCtrlrs)


app.set('view engine', 'ejs'); 

app.use(methodOverride('_method'))

router.use((req,res, next) => {

    console.log(`${req.method} ${req.originalUrl}`); 

    next(); 
})




// 404

app.get('/*', (req,res) => {
    const context = {error: req.error}; 
    // if(error){
    //     console.log(error);
    //     req.error = error; 
    //     return next();
    // 
    return res.status(404).render('404', context); 
});

// Index Route 
// this route will catch GET requests to /products/ and respond with all the products
app.listen(PORT, () => console.log(`Listen for client request on port ${PORT}`)); 


