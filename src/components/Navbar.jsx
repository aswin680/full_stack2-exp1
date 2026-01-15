import { useSelector } from 'react-redux';

export default function Navbar({ userName, role, cartCount, onLogout, onNavigate }) {
  const isAdmin = role === 'admin';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">E-Shop</div>

        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => onNavigate('products')}
            >
              Products
            </button>
          </li>
          
          {isAdmin && (
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => onNavigate('dashboard')}
              >
                Dashboard
              </button>
            </li>
          )}

          {!isAdmin && (
            <li className="nav-item">
              <button 
                className="nav-link cart-link"
                onClick={() => onNavigate('cart')}
              >
                Cart ({cartCount})
              </button>
            </li>
          )}

          <li className="nav-item user-info">
            <span className="user-name">{userName}</span>
            <span className={`role-badge ${role}`}>{role.toUpperCase()}</span>
          </li>

          <li className="nav-item">
            <button 
              className="logout-btn"
              onClick={onLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
