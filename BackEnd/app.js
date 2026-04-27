const express = require('express'); // 1. Sab se pehle express
const cors = require('cors');       // 2. Phir cors
const productRoutes = require('./src/routes/ProductRoutes');

const app = express(); // 3. Ab app banayein (Sirf EK BAAR)

app.use(cors()); // 4. Cors enable karein
app.use(express.json()); // 5. JSON body parser (Sirf EK BAAR)

app.use('/products', productRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chal raha hai port ${PORT} par!`));
