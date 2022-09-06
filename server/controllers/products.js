const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add product', 
        path: '/admin/add-product',
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(
        null,
        req.body.title,
        req.body.description,
        req.body.image,
        req.body.price,
        req.body.salePrice
    );
    product.save()
        .then(() => {})
        .catch(err => console.log('controllers/products.js::postAddProduct()', err));
    res.redirect('/');
};

// returns all products 
exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.json(rows);
            console.log('hi mom');
        })
        .catch(err => console.log('controllers/products.js::getProducts()', err));
}

// returns specific product
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId)
        .then(([product]) => {
            res.json(product[0]); // retarded syntax due to sql returns... WHERE IS MY ORM AT?!?!?!!?!?!?!?!?!?!!!
        })
        .catch(err => console.log('controllers/products.js::getProduct()', err));
};