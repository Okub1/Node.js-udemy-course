const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>Hello from express!</h1><br><a href="/admin/add-product"><button>Add product</button></a>');
});

module.exports = router;