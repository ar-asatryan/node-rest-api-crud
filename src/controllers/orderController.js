const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const {errorHandler} = require("../middleware/errorMiddleware");

const getOrders = asyncHandler(async (req, res, next) => {
    const order = await Order.find();
    res.send(order);
})

const setOrder = asyncHandler(async (req, res, next) => {
    const order = req.body;
    if(!req.body.orderName) errorHandler(res);
    await Order.create(order);
    res.json(order);
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
    const _id = req.params.id;
    console.log("id.....", _id);
    const deletedOrder = await Order.remove({_id})
    // const deletedOrder = await Order.remove({_id: id}) // 
    res.status(201).json(deletedOrder);
})

module.exports = {
    getOrders,
    setOrder,
    updateOrder,
    deleteOrder,
 }