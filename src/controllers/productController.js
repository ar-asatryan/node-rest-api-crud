const asyncHandler = require('express-async-handler');
const Product = require('../models/productSchema');

// Retrieve /api/products...
const getProducts = asyncHandler(async (req, res) => { 

    const product = await Product.find();

    res.status(201).send(product)
})

// Set /api/products

const setProduct = asyncHandler(async (req, res) => {
    // const user = {
    //   name: req.body.name,
    //   age: req.body.age
    // }

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
    // console.log(req.body);
  
    if(!req.body.name) {
      const err = new Error("First Error...")
      err.status = 401;
      // res.render('error', { error: err })
      throw err;
      }
  
    res.status(201).json({
      message: `Product Updated: ${req.params.productID}`
    })
})

const deleteProduct = asyncHandler(async (req, res) => {
    res.json({
        message: `Product Deleted: ${req.params.productID}`
    })
})

module.exports = {
    getProducts,
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct
}
