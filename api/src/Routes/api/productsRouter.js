const express = require('express');
const { getAllProducts, addProducts, addProductsAll, getProduct } = require('../../Controllers/api/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);

router.post('/', addProducts)
router.post('/all', addProductsAll)

module.exports = router;