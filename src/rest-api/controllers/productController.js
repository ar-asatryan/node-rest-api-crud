

// Retrieve /api/products...
const getProducts = (req, res) => { 
    res.status(201).send({
        message: "Handling GET requests for /products...",
        product: productsData.product1
    })
}

// Set /api/products

const setProduct = (req, res) => {
    const user = {
      name: req.body.name,
      age: req.body.age
    }
    res.status(201).send({
      message: "Handling POST requests for /products...",
      product: productsData.product2,
      userName: user.name
  })
}

const getProduct = (req, res) => {
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

}

const updateProduct = (req, res) => {
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
}

const deleteProduct = (req, res) => {
    res.json({
        message: `Product Deleted: ${req.params.productID}`
    })
}

module.exports = {
    getProducts,
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct
}
