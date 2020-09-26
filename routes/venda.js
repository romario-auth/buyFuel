const express   = require('express');
const router    = express.Router();
const Venda     = require('../models/Venda');

router.get('/test', (req, res) => {
    res.send('deu certo');
});

router.get('/historico', (req, res) => {
    Venda.findAll({order: [
        ['createdAt', 'DESC']
    ]})
    .then(vendas => {
        res.render('historic', {vendas});
    })
    .catch(err => console.log(err));
});

router.post('/historico', (req, res) => {
    
    let search = req.body.searchBuy;

    Venda.findAll({
        where: {card: search},
        order: [
        ['createdAt', 'DESC']
    ]})
    .then(vendas => {
        res.render('historic', {
            vendas, search
        });
    })
    .catch(err => console.log(err));
});


// add 'venda' into POST
router.post('/add', (req, res) => {

    let {liters, price, card} = req.body;
    let value = liters * price;

    // insert date
    Venda.create({
        liters,
        price,
        value,
        card
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
    
});

module.exports = router;