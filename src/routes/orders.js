const express = require('express');
const ordersData = require('../data/orders-data')
const router = express.Router();

router
.get('/', (req, res, next) => {
    res.json({
        message: "Handling GET requests for /orders",
        order1: ordersData.order1
    })
})
.post('/', (req, res, next) => {
    res.json({
        message: "Handling POST requests for orders",
        order2: ordersData.order2
    });
})

module.exports = router;