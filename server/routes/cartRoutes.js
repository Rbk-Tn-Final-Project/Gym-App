// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add item to cart
router.post('/add', cartController.addItemToCart);

// Get cart items for a user
router.get('/:userId', cartController.getCartItemsForUser);

// Remove item from cart
router.delete('/remove/:userId/:productId', cartController.removeItemFromCart);

module.exports = router;
