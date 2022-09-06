const Product = require('../models/product');

// [deprecated] legacy code for add product form 
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add product', 
        path: '/admin/add-product',
    });
};

// add product
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const price = req.body.price;
    const salePrice = req.body.salePrice;

    Product.create({
        title: title,
        description: description,
        image: image,
        price: price,
        salePrice: salePrice
    })
        .then(result => {
            // console.log(result);
        })
        .catch(err => console.log('[ERROR]: controllers/products.js::postAddProduct()', err));
    res.redirect('/');
};

// returns all products 
exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.json(products);
        })
        .catch(err => console.log('[ERROR]: controllers/products.js::getProducts()', err));
}

// returns specific product
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findByPk(productId)
        .then(product => {
            res.json(product); // retarded syntax due to sql returns... WHERE IS MY ORM AT?!?!?!!?!?!?!?!?!?!!!
        })
        .catch(err => console.log('[ERROR]: controllers/products.js::getProduct()', err));
};