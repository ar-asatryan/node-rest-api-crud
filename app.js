const express = require('express')
const app = express();

const productRoutes = require('./src/rest-api/routes/products');
const orderRoutes = require('./src/rest-api/routes/orders')

// app.use('/', (req, res, next) => {
//     res.json({
//         message: "Just LocalHost Requests......>>>>>>>>>>>>>>>>>"
//     })
//     next()
// })

app.use("/products", productRoutes);
app.use("/orders", orderRoutes)

app.use( (req, res, next) => {
    const error = new Error('Request Not Found...')
    error.status = 404;
    next(error); 
});

app.use((error, req, res, next) => {
    res.status(error.status || 405)
    res.send({
        error: error.message
    })
})

// app.use((req, res, next) => {
//     // console.log('Logging HTTP Request Structure>>>>>', req);
//     res.json({
//         message: "Server Started...!"
//     })
// });


module.exports = app;