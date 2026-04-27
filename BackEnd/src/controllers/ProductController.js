let products=[
    {
    id:1,name:"Product1",price:100
},
{
    id:2,name:"Product2",price:150
}
];
const getAllProducts=(req,res)=>{
    res.status(200).json(products);
};
const createProduct = (req, res) => {
    // 1. Request body se name aur price nikalna
    const { name, price } = req.body;

    // 2. Naya product object banana
    const newProduct = {
        id: products.length + 1, // Simple ID generation
        name: name,
        price: price
    };

    // 3. Array mein add karna
    products.push(newProduct);

    // 4. Response bhejna ke product add ho gaya
    res.status(201).json(newProduct);
};
const getProductById = (req, res) => {
    // 1. Get the ID from the URL (req.params)
    // Note: ID from URL is a string, so we convert it to a Number
    const id = Number(req.params.id);

    // 2. Find the product in the array
    const product = products.find(p => p.id === id);

    // 3. Handle if not found
    if (!product) {
        return res.status(404).json({ message: "Product not Found!" });
    }

    res.status(200).json(product);
};
const updateProduct = (req, res) => {
    const id = Number(req.params.id);
    const { name, price } = req.body;

    // 1. Pehle product ko array mein dhoondo
    const product = products.find(p => p.id === id);

    // 2. Agar product nahi mila toh error bhej do
    if (!product) {
        return res.status(404).json({ message: "Not find Product for updation!" });
    }

    // 3. Product ki values update kar do
    // Agar body mein name nahi bhej rahe toh purana wala hi rehne do (|| use karke)
    product.name = name || product.name;
    product.price = price || product.price;

    res.status(200).json({ message: "Product UPDATED!", product });
};

const deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    // 1. Check karein ke product exist karta bhi hai ya nahi
    const exists = products.find(p => p.id === id);
    if (!exists) {
        return res.status(404).json({ message: "Item not foud for deletion!" });
    }

    // 2. Filter use karke us ID ke ilawa baaki sab products ko naya array bana dein
    // Note: 'products' ko 'let' se define karna zaroori hai controller ke top par
    products = products.filter(p => p.id !== id);

    res.status(200).json({ message: "Product deleted!" });
};

// module.exports mein isse add karna lazmi hai
module.exports = {
    getAllProducts,
    createProduct ,
    getProductById,
    updateProduct, 
    deleteProduct
};
