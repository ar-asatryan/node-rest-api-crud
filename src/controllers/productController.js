const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// Retrieve /api/products...
const getProducts = asyncHandler(async (req, res) => { 

    const product = await Product.find();

    res.status(201).send(product)
})

// Set /api/products
const setProduct = asyncHandler(async (req, res) => {

    const product = await Product.create({
      text: req.body.text,
      price: req.body.price
    })


    res.status(201).json(product)
})

const getProduct = asyncHandler(async (req, res) => {
    const id = req.params.productID;
    if(id === "UNIQUE_ID_111") {
        res.json({
            message: `We've got a ${id} id...`
        })
    } else if (id === productsData.product1.id) {
        res.json({
          message: `We've got a ${productsData.product1.id} id...`,
        });
    } else{
        res.send({
          message: `We've got a PASSED id...`,
        });
    }

} )

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id
    
    const updatedProduct = await Product.findOneAndUpdate({id}, {__v: 29, text: "Barlus"}, {
        new: true
    })

    res.status(201).json(updatedProduct)
})

const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id

    const deletedProduct = await Product.findOneAndRemove({id})

    res.json(deletedProduct)
})

module.exports = {
    getProducts,
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct
}
