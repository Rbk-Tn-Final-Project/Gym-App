const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const productRoutes = require('./routes/ProductRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/product', productRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
