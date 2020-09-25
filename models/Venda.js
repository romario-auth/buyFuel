const Sequelize = require('sequelize');
const db = require('../db/connection');

const Venda = db.define('venda', {
    liters: {
        type: Sequelize.DOUBLE,
    },
    value: {
        type: Sequelize.DOUBLE,
    },
    card: {
        type: Sequelize.STRING,
    }
});

module.exports = Venda;