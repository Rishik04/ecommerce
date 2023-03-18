const express = require('express');
const categoryRoute = require('./categoryRouter');
const bestSellerRoute = require('./bestSellerRoute');

const router = express.Router();

router.use('/category', categoryRoute);
router.use('/bestseller', bestSellerRoute);

module.exports = router;