const { Product } = require('../models');
const fs = require('fs');
const path = require('path');
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        const productsWithImages = products.map(product => ({
            ...product.dataValues,
            imageUrl: `http://localhost:3000/api/product/${product.images[0].replace(/\\/g, '/')}`
        }));
        res.status(200).json(productsWithImages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getRandomImagePath = () => {
    const uploadsDir = path.join(__dirname, '..', 'uploads');
    const files = fs.readdirSync(uploadsDir);
    const imageFiles = files.filter(file => /\.(png|jpg|jpeg|gif)$/.test(file)); // Filter for image files
  
    if (imageFiles.length === 0) {
      throw new Error('No images found in uploads directory');
    }
  
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return path.join('uploads', imageFiles[randomIndex]);
  };

  exports.createProduct = async (req, res) => {
    const { name, quantity, price, description,img } = req.body;
    

    try {
        const product = await Product.create({
            img,
            name,
            quantity,
            price,
            description
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const {img, name, quantity, price ,description } = req.body;

    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        product.name = name;
        product.price = price;
        product.img = img;
        product.quantity = quantity;
        product.description= description;



        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        await product.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteAll = async (req, res) => {
    try {
        await Product.destroy({
            where: {},
            truncate: true
        });
        res.send('All products deleted');
    } catch (err) {
        res.status(500).send(err);
    }
};