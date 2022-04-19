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

app.get('/products/:productIndex', (req,res) => {{
    res.send(products[req.params.productIndex]);
}})


app.get('/users/:firsttName', (req,res) => {res.send(`Hello, ${req.params.firsttName}`)});

app.get('/acounts/:names',(req,res) => {res.send(`Hello, ${req.params.names}`)}); 


app.listen(PORT, () => console.log(`Listen for client request on port ${PORT}`)); 



