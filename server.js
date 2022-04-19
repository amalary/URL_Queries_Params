const express = require('express'); 

const app = express(); 

const PORT = 4000; 




// temporary, simulated database

const products = ['t-shirt', 'shoes', 'necklace']; 


// routes/controllers

// app.get('/products/0', (req,res) => {res.send(products[0])}); 
// app.get('/products/0', (req,res) => {res.send(products[1])}); 
// app.get('/products/0', (req,res) => {res.send(products[2])}); 

// Refactored Version Of controller

app.get('/products/awesome', (req,res) => {
    res.send('<h1>My products are awesome</h1>')

});

app.get('/greeting', (req,res) => {
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`)
}); 

app.get('/add', (req,res) => {
    const sum = parseInt(req.query.x )+ parseInt(req.query.y)  
    res.send(`${req.query.x} + ${req.query.y} = ${sum}`)
}); 

app.get('/menu', (req,res) => {
    res.send(`We are home of the best ${req.query.food}  all for the price of $${req.query.price}`); 
}); 

app.get('/dogs/:name/:breed', (req,res) => {
    res.send(`My dogs name is ${req.params.name} the type of breed he is is  a ${req.params.breed}`); 
}); 

app.get('/cars/:type', (req,res) => {
    res.send(`My favorite type of car right now is the ${req.params.type}`); 
});


app.get('/products/:productIndex', (req,res) => {{
    res.send(products[req.params.productIndex]);
}});


app.get('/users/:firsttName', (req,res) => {res.send(`Hello, ${req.params.firsttName}`)});

app.get('/acounts/:names',(req,res) => {res.send(`Hello, ${req.params.names}`)}); 


app.listen(PORT, () => console.log(`Listen for client request on port ${PORT}`)); 



