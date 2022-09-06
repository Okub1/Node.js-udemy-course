const products = [];

module.exports = class Product {
    constructor(id, title, description = '', image = '', price = 0, salePrice = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
        this.salePrice = salePrice;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }

    static findById(id, callback) {
        const product = products.find(item => {
            return parseInt(item.id) === parseInt(id);
        });
        callback(product);
    }
}