const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const cors = require("cors");
const multer = require('multer');


const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/ProductRoutes');
const messageRoutes = require('./routes/messageRoutes'); 
const cartRoutes = require('./routes/cartRoutes');
const app = express();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage });


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads')); 


app.use('/api/users', userRoutes);
app.use('/api/products', upload.single('img'), productRoutes); 
app.use('/api/messages', messageRoutes); 
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});