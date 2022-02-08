const express = require('express')
const app = express();

const productRoutes = require('./src/rest-api/routes/products');
const orderRoutes = require('./src/rest-api/routes/orders')

// app.use( (req, res) => res.json({
//     message: "Server Started..."
// }) )

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes)

app.use( (req, res, next) => {
    const error = new Error('Request Not Found...')
    error.status = 604;
    next(error); 
});

app.use((error, req, res, next) => {
    res.status(error.status || 605)
    res.send({
        error: error.message
    })
})

module.exports = app