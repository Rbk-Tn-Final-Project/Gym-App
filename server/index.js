const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const productRoutes = require('./routes/ProductRoutes');
const coachListRoutes = require ('./routes/coachsRoutes');
const planningRoutes = require ('./routes/planningRoutes');
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/coaches', coachListRoutes);
app.use('/api/planning', planningRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
