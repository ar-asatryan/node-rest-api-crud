const express = require('express');
const res = require('express/lib/response');
const productsData = require('../data/products-data')
const router = express.Router();

const {
  getProducts,
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// router.use(express.json())

router
.get('/', getProducts)
.post('/', setProduct)
.get('/:productID', getProduct)
.put('/:productID', updateProduct)
.delete('/:productID', deleteProduct)

// router.route('/').get(getProducts).post(setProduct)
// router.route('/:productID').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;