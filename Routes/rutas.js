const express = require('express');
const rutas = express.Router();
const Item = require('../Models/item');

// index
rutas.get('/',  async(req, res) => {
    const items = await Item.find().sort({anio: 1});
    res.render('index', { items });
})

// add - get
rutas.get('/add',  (req, res) => {
    res.render('add');
})

// add - post
rutas.post('/', async (req, res) => {
    
    const newitem = new Item();
    newitem.anio = req.body.anio;
    newitem.nacional = req.body.nacional;
    newitem.mundial = req.body.mundial;
    await newitem.save();

    res.redirect('/');

})

// delete
rutas.get('/delete/:id', async (req, res) => {
    await Item.deleteOne({_id: req.params.id });
    res.redirect('/');
})

// ediatr get
rutas.get('/edit/:id', async (req, res) => {
    const año = await Item.findById(req.params.id);
    res.render('edit', { año }); 

})

// edit post
rutas.post('/edit', async (req, res) => {
    const editItem = await Item.findOne({anio: req.body.anio});
    // res.send(editItem);
    editItem.nacional = req.body.nacional;
    editItem.mundial = req.body.mundial;
    await editItem.save();

    res.redirect('/');
})

module.exports = rutas;