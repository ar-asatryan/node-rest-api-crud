const express = require('express')
const dotenv = require('dotenv').config();
const connectDB = require('./src/config/db')

const port = process.env.PORT || 5544;

const app = express();
connectDB()

const productRoutes = require('./src/routes/products');
const orderRoutes = require('./src/routes/orders')


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

app.listen(port, () => console.log(`Server listen:::: ${port}`));
