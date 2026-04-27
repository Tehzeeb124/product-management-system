const express = require('express'); 
const cors = require('cors');       
const productRoutes = require('./src/routes/ProductRoutes');

const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chal raha hai port ${PORT} par!`));