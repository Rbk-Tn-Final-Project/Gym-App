const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const cors = require("cors");

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/ProductRoutes');
const messageRoutes = require('./routes/messageRoutes'); // Import message routes

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/messages', messageRoutes); // Add message routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
