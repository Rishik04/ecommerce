const express = require('express');
const {login, register, addAddress} = require('../../Controllers/user/userController');

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/add-address', addAddress)

module.exports = router;