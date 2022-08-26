const express = require('express');

const router = express.Router();

// GET /api/hello
router.get('/hello', (req, res, next) => {
    res.json({message: 'Hello from the server!'});
});

module.exports = router;