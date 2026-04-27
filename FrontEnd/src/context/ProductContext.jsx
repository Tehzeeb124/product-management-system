import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Aapka Backend URL
  const API_URL = 'http://localhost:3000/products';

  useEffect(() => {
    // Loading shuru mein true hoti hai
    setLoading(true); 

    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Network response sahi nahi hai');
        return res.json();
      })
      .then(data => {
        console.log("Backend se data aaya:", data); // Check karne ke liye
        setProducts(data); // Direct data set karein
        setLoading(false); // <--- Yeh line loading khatam karti hai
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false); // Error aaye tab bhi loading band honi chahiye
      });
  }, []);

  const deleteProduct = (id) => {
    if (window.confirm("Kiya aap waqai delete karna chahte hain?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const addProduct = (newProduct) => {
    setProducts([{ ...newProduct, id: Date.now() }, ...products]);
  };

  const updateProduct = (id, updatedData) => {
    setProducts(products.map(p => (p.id === Number(id) ? { ...p, ...updatedData } : p)));
  };

  return (
    <ProductContext.Provider value={{ products, loading, deleteProduct, searchTerm, setSearchTerm, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};