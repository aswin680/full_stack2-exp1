import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, deleteProduct } from '../redux/productsSlice';
import { addToCart } from '../redux/cartSlice';

export default function ProductList({ userRole, userName }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const isAdmin = userRole === 'admin';

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      dispatch(addProduct({
        id: Date.now(),
        name: newProduct.name,
        price: parseFloat(newProduct.price),
      }));
      setNewProduct({ name: '', price: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Products</h2>
        <p className="user-info">Logged in as: <strong>{userName}</strong> ({userRole})</p>
      </div>

      {/* Admin-only product management section */}
      {isAdmin && (
        <div className="admin-section">
          <h3>Admin: Add New Product</h3>
          <form onSubmit={handleAddProduct} className="add-product-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                step="0.01"
              />
            </div>
            <button type="submit" className="admin-btn">Add Product</button>
          </form>
        </div>
      )}

      {/* Product display section */}
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price"><span className="price-symbol">₹</span>{product.price.toFixed(2)}</p>

            {/* Regular user actions */}
            {!isAdmin && (
              <button 
                className="cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            )}

            {/* Admin actions */}
            {isAdmin && (
              <div className="admin-actions">
                <button 
                  className="delete-btn"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
