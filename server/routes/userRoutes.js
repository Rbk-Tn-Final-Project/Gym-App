const express = require('express');
const { registerUser, loginUser ,getAllusers} = require('../controllers/userController');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getAll',getAllusers)

module.exports = router;
