const express = require('express');
const {login, register} = require('../../Controllers/user/userController');
const { addAddress, getAddress } = require('../../Controllers/user/addressController');

const router = express.Router();


//auth routes for user
router.post('/register', register);
router.post('/login', login);

//address routes for user
router.post('/add-address', addAddress)
router.get('/get-address/:id', getAddress)

module.exports = router;