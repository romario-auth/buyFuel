const express   = require('express');
const router    = express.Router();
const Venda     = require('../models/Venda');

router.get('/test', (req, res) => {
    res.send('deu certo');
});

// add 'venda' into POST
router.post('/add', (req, res) => {

    let {liters, value, card} = req.body;

    // insert date
    Venda.create({
        liters,
        value,
        card
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
    
});

module.exports = router;