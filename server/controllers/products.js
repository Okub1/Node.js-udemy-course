const Product = require('../models/product');

// push dummy products to database
let product = new Product(1, 'Book', 'lorem ipsum aslkdjaljfl', '/img/products/1.jpg');
product.save();
product = new Product(2, 'Glass');
product.save();
product = new Product(3, 'Phone');
product.save();
product = new Product(4, 'Chewing gum');
product.save();

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add product', 
        path: '/admin/add-product',
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.id, req.body.title);
    product.save();
    res.redirect('/');
};

// returns all products 
exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.json(products);
}

// returns specific product
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        console.log(product, 'hi mom!');
        res.json(product);
    });
};