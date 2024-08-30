// controllers/cartController.js
const Cart = require('../models/Cart');

const addItemToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const [cartItem, created] = await Cart.upsert({
            userId,
            productId,
            quantity
        });
        res.status(200).json(cartItem);
    } catch (error) {
        console.error('Failed to add item to cart:', error);
        res.status(500).json({ error: 'Failed to add item to cart' });
    }
};

const getCartItemsForUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const cartItems = await Cart.findAll({ where: { userId } });
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve cart items' });
    }
};

const removeItemFromCart = async (req, res) => {
    const { userId, productId } = req.params;
    try {
        await Cart.destroy({ where: { userId, productId } });
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove item from cart' });
    }
};

module.exports = {
    addItemToCart,
    getCartItemsForUser,
    removeItemFromCart
};
