const db = require('../utils/database');

module.exports = class Product {
    constructor(id, title = '', description = '', image = '', price = 0, salePrice = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
        this.salePrice = salePrice;
    }

    // really ugly, i hate this already... i mean, i know SQL, but still, ugly. WHERE IS MY ORM AT?!?!?!?!
    save() {
        return db.execute('insert into products (title, description, image, price, salePrice) values (?, ?, ?, ?, ?)',
            [this.title, this.description, this.image, this.price, this.salePrice]
        );
    }

    static deleteById(id) {
    }

    // returns promise, i think i should now use typescript
    static fetchAll() {
        return db.execute('select * from products');
    }

    static findById(id) {
        return db.execute('select * from products where products.id = ?', [id]);
    }
}