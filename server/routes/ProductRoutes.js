const express = require('express');
const multer = require('multer');
const path = require('path');

const upload = multer({ dest: 'uploads/' }); // Define the destination folder

const { getProducts, createProduct, getProductById, updateProduct, deleteProduct, deleteAll } = require('../controllers/productsController');
const router = express.Router();

router.get('/', getProducts);
router.post('/', upload.single('img'), createProduct); // Use multer middleware
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.delete('/', deleteAll);

module.exports = router;