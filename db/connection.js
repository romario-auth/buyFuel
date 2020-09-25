const Sequelize = require('sequelize');

const sequelize = new Sequelize('experien_buyFuel', '', '', {
    host: 'srv168.prodns.com.br',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;