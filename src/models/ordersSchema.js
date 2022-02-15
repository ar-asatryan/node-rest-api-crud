const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    orderName: {
        type: String,
        required: [true, "Please write order's name"],
    },
    from: {
        type: String,
        required: [true, "Please write order's name"],
    },
    to: {
        type: String,
        required: [true, "Please write order's name"],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Order", ordersSchema);