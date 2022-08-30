const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// GET /api/hello
router.get('/hello', (req, res, next) => {
    res.json({message: 'Hello from the server!'});
});

// GET /api/products
router.get('/products/', productsController.getProducts);

// GET /api/products/:productId (wildcard)
router.get('/products/:productId', productsController.getProduct);

module.exports = router;