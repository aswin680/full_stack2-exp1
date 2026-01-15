import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    userName: '',
    role: 'user', // 'user' or 'admin'
    token: null,
  });

  const [currentView, setCurrentView] = useState('login');
  const cartItems = useSelector(state => state.cart.items);

  const handleLogin = (credentials) => {
    setAuthState({
      isLoggedIn: true,
      userName: credentials.email.split('@')[0],
      role: credentials.role || 'user',
      token: 'fake-token-' + Date.now(),
    });
    setCurrentView('products');
  };

  const handleLogout = () => {
    setAuthState({
      isLoggedIn: false,
      userName: '',
      role: 'user',
      token: null,
    });
    setCurrentView('login');
  };

  return (
    <div className="app">
      {authState.isLoggedIn && (
        <Navbar 
          userName={authState.userName}
          role={authState.role}
          cartCount={cartItems.length}
          onLogout={handleLogout}
          onNavigate={setCurrentView}
        />
      )}

      {!authState.isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="main-content">
          {currentView === 'products' && (
            <ProductList 
              userRole={authState.role}
              userName={authState.userName}
            />
          )}
          {currentView === 'cart' && <Cart />}
          {currentView === 'dashboard' && authState.role === 'admin' && (
            <div className="admin-dashboard">
              <h2>Admin Dashboard</h2>
              <p>Welcome, {authState.userName}! You have admin privileges.</p>
              <ul>
                <li>Manage Products</li>
                <li>View Users</li>
                <li>View Orders</li>
                <li>System Settings</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
