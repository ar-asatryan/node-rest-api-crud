const Order = require("../models/ordersSchema");
const asyncHandler = require("express-async-handler");
const {errorHandler} = require("../middleware/errorMiddleware");

const getOrders = asyncHandler(async (req, res, next) => {
    const order = await Order.find();
    res.send(order);
})

const setOrder = asyncHandler(async (req, res, next) => {
    const order = req.body;
    if(!req.body.name) errorHandler(res);
    await Order.create(order);
    res.json({
        message: "Handling POST requests for orders",
        order2: ordersData.order2
    });
})

const updateOrder = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const updatedOrder = await Order.findByIdAndUpdate(
        {_id: id},
        {from: "Germany"}
    );

    res.status(201).json(updatedOrder);
})

const deleteOrder = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const deletedOrder = await Order.remove({id})
    res.status(201).json(deleteOrder);
})

module.exports = {
    getOrders,
    setOrder,
    updateOrder,
    deleteOrder,
 }