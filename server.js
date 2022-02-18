const express = require('express')
const dotenv = require('dotenv').config();
const connectDB = require('./src/config/db')
const {errorHandler} = require('./src/middleware/errorMiddleware')

const port = process.env.PORT || 5544;

const app = express();
connectDB()

const productRoutes = require('./src/routes/products');
const orderRoutes = require('./src/routes/orders');
const userRoutes = require('./src/routes/users')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text())


app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes)
app.use("/api/users", userRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server listen:::: ${port}`));
