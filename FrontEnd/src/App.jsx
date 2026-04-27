import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home'; // 'h' small kyunke aapki file 'home.jsx' hai
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/Editproduct'; // 'p' small kyunke aapki file 'Editproduct.jsx' hai

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={{ padding: '20px', background: '#f4f4f4', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home (All Products)</Link>
          <Link to="/add">Add New Product</Link>
        </nav>

        {/* Routes Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;