const express = require('express');
const { bestSeller, addBestSeller } = require('../../Controllers/api/bestSellerController');

const router = express.Router();

router.get('/', bestSeller);
router.post('/', addBestSeller)

module.exports = router;