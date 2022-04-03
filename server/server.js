const path = require('path');
const fs = require('fs')
const express = require('express');
const app = express();


const catalog_path = path.resolve(__dirname, './db/product.json');
const catalogV2_path = path.resolve(__dirname, './db/category.json');
const cart_path = path.resolve(__dirname, './db/cart.json');
const server_dir = path.resolve(__dirname, '../dist');

app.use(express.static(server_dir));
app.use(express.json());


const server_port = 3000;
const data = new Date();


app.listen(server_port, () => {
    console.log(`Server Start! port: ${server_port}, home_directory: ${server_dir}, Дата\\Время: ${data}`)
})

app.get('/api/v1/catalog', (req, res) => {
    fs.readFile(catalog_path, 'utf-8', (err, data) => {
        if(!err){
            res.send(data);
        } else {
            res.status(500).send(err)
        }
    })
});

app.get('/api/v2/catalog', (req, res) => {
    fs.readFile(catalogV2_path, 'utf-8', (err, data) => {
        if(!err){
            res.send(data);
        } else {
            res.status(500).send(err)
        }
    })
});

app.get('/api/v1/cart', (req, res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            res.status(500).send(err)
        }
    })
});

app.post('/api/v1/cart', (req,res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if(!err) {
            const cart = JSON.parse(data);

            const product = req.body;
            product.quantity = 1;

            const existProduct = cart.find((item) => item.id == product.id)

            if(existProduct) {
                existProduct.quantity++
            } else {
                cart.push(product)
            }

            fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
                res.sendStatus(201)
            })
        } else {
            res.status(500).send(err)
        }
    })
});

app.put('/api/v1/cart/:id', (req, res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if(!err) {
            let cart = JSON.parse(data);
            let product = cart.find( p => p.id == req.params.id);

            product.quantity = req.body.quantity;

            fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err,data) => {
                res.sendStatus(201)
            })
        } else {
            res.status(500).send(err)
        }
    })
});

app.delete('/api/v1/cart/:id', (req, res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if(!err) {
           let cart = JSON.parse(data);
           let index = cart.findIndex( p => p.id == req.params.id);

           cart.splice(index, 1);

           fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
               res.sendStatus(201)
           })
        } else {
            res.status(500).send(err)
        }
    })
})


