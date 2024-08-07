const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/ProductRoutes');

const app = express();

app.use(bodyParser.json());
// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
