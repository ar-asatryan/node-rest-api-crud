const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name..."]
    },
    email: {
        type: String,
        required: [true, "Please add a email..."],
        Unique: true
    },
    password: {
        type: String,
        required: [ true, "Password required..."]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)