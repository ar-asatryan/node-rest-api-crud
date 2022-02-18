const express = require('express');
const router = express.Router();

const {
    getOrders,
    setOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/orderController');



router.route('/')
    .get(getOrders)
    .post(setOrder);
router.route('/:orderID')
    .put(updateOrder)
    .delete(deleteOrder);

module.exports = router;