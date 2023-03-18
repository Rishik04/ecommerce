const express = require('express');
const {addUser, getUser} = require('../../Controllers/user/userController');

const router = express.Router();

router.post('/', addUser);
router.get('/', getUser);

module.exports = router;