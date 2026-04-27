import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { products, loading, deleteProduct, searchTerm, setSearchTerm } = useContext(ProductContext);

  // FIXED: Yahan p.title ki jagah p.name hona chahiye
  const filteredProducts = products.filter(p => 
    p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading... Products aa rahe hain...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Product Management</h1>
        <Link to="/add" style={{ background: 'green', color: 'white', padding: '10px', borderRadius: '5px', textDecoration: 'none' }}>
          + Add New Product
        </Link>
      </div>

      <input 
        type="text" 
        placeholder="Search by name..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '100%', maxWidth: '400px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              {/* FIXED: Thumbnail placeholder agar image URL na ho */}
              <img 
                src={p.thumbnail || "https://via.placeholder.com/150?text=No+Image"} 
                alt={p.name} 
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} 
              />
              <h3 style={{ margin: '10px 0' }}>{p.name}</h3>
              <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>Price: ${p.price}</p>

              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button 
                  onClick={() => deleteProduct(p.id)} 
                  style={{ flex: 1, background: '#e74c3c', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Delete
                </button>
                <Link 
                  to={`/edit/${p.id}`} 
                  style={{ flex: 1, background: '#f39c12', color: 'white', textAlign: 'center', textDecoration: 'none', padding: '8px', borderRadius: '4px' }}
                >
                  Edit
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h3>Koi product nahi mila!</h3>
        )}
      </div>
    </div>
  );
};

export default Home;