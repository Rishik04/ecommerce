const express = require('express');
const {getCategory, addCategory} = require('../../Controllers/api/categoryController.js');

const categoryRoute = express.Router();

categoryRoute.get('/', getCategory);
categoryRoute.post('/', addCategory);

module.exports= categoryRoute;
