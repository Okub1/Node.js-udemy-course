const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    image: Sequelize.STRING,
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    salePrice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Product;