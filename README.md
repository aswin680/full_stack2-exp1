# Experiment 1: State Management with useState & Redux

## 📋 Project Overview

This is a **Full Stack Development Experiment** demonstrating state management workflows using:
- **React Hooks (`useState`)** for authentication state management
- **Redux Toolkit** for product catalog and shopping cart state management

The application is a simple **E-Commerce Platform** where users can browse products and add them to a cart. Admins can manage products.

---

## ✨ Features

### 1. **Authentication System (useState)**
- Simple login form with email and password validation
- Role-based access (Normal User vs Admin)
- Logout functionality
- State stored in `App.jsx` using React's `useState` hook

### 2. **Product Management (Redux)**
- View all products
- **Admin**: Add and delete products
- **User**: Add products to shopping cart
- Product state managed in Redux store

### 3. **Shopping Cart (Redux)**
- Add products to cart
- Adjust product quantities
- Remove items from cart
- Calculate total price
- Clear entire cart

### 4. **Role-Based UI**
- **Normal User**: See products and cart functionality
- **Admin**: See product management options and admin dashboard

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Installation Steps

#### Step 1: Clone the Repository
```bash
git clone https://github.com/aswin680/full_stack2-exp1.git
cd full_stack2-exp1
```

#### Step 2: Install Dependencies
```bash
npm install
```

#### Step 3: Start the Development Server
```bash
npm run dev
```

#### Step 4: Open in Browser
Visit `http://localhost:5173/` in your web browser

---

## 🎯 How to Use the Application

### Login Page
1. Enter any email address (e.g., `user@example.com`)
2. Enter any password (any value works)
3. Select your role:
   - **Normal User** - Can view products and shop
   - **Admin** - Can manage products
4. Click **Login**

### For Normal Users
1. **View Products**: Browse available products with prices in rupees (₹)
2. **Add to Cart**: Click "Add to Cart" button on any product
3. **View Cart**: Click "Cart" in navbar to see your items
4. **Adjust Quantity**: Change product quantity in cart
5. **Remove Items**: Delete products from cart
6. **Logout**: Click "Logout" to exit

### For Admin Users
1. **Add Product**: Fill in product name and price, click "Add Product"
2. **View Products**: See all products in the catalog
3. **Delete Product**: Click "Delete" button to remove a product
4. **Admin Dashboard**: Click "Dashboard" in navbar for admin panel
5. **Logout**: Click "Logout" to exit

---

## 📁 Project Structure

```
exp1/
├── src/
│   ├── redux/
│   │   ├── store.js              # Redux store configuration
│   │   ├── productsSlice.js       # Products state & actions
│   │   └── cartSlice.js           # Cart state & actions
│   │
│   ├── components/
│   │   ├── Login.jsx              # Login form component
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── ProductList.jsx        # Product display & management
│   │   └── Cart.jsx               # Shopping cart component
│   │
│   ├── App.jsx                    # Main app with auth state
│   ├── App.css                    # Application styles
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
│
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
└── README.md                       # This file
```

---

## 🔄 State Management Architecture

### 1. **Authentication State (React Hooks - useState)**
Located in: `src/App.jsx`

```javascript
const [authState, setAuthState] = useState({
  isLoggedIn: false,
  userName: '',
  role: 'user',        // 'user' or 'admin'
  token: null
});
```

**Purpose**: Manages user login status, name, and role
**Passed to**: Navbar, ProductList components via props

### 2. **Product State (Redux)**
Located in: `src/redux/productsSlice.js`

**Actions Available**:
- `setProducts()` - Set product list
- `addProduct()` - Add new product (Admin only)
- `deleteProduct()` - Remove product (Admin only)

### 3. **Cart State (Redux)**
Located in: `src/redux/cartSlice.js`

**Actions Available**:
- `addToCart()` - Add product to cart
- `removeFromCart()` - Remove item from cart
- `updateQuantity()` - Change product quantity
- `clearCart()` - Empty entire cart

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI Framework |
| **Redux Toolkit** | State management for products & cart |
| **React-Redux** | Connect React with Redux |
| **Vite** | Build tool & dev server |
| **CSS3** | Styling |

---

## 💡 Key Concepts Demonstrated

### 1. **React Hooks (useState)**
- Managing authentication state without Context API
- Passing state as props to child components
- Local state management in App.jsx

### 2. **Redux Toolkit**
- Creating slices with createSlice
- Dispatching actions from components
- Using useSelector hook to access state
- Using useDispatch hook to dispatch actions

### 3. **Role-Based Access Control**
- Conditional rendering based on user role
- Different UI for admin vs normal users
- Protected features for specific roles

### 4. **Component Communication**
- Parent to child via props (auth state)
- Components to Redux store (product & cart)
- Event handlers for user interactions

---

## 🔍 How State Flows Through the App

```
User Login (App.jsx - useState)
        ↓
Auth State Updated (userName, role)
        ↓
Pass to Navbar & ProductList (props)
        ↓
Navbar: Display user info & logout
ProductList: Show role-based UI
        ↓
User interacts (add product/add to cart)
        ↓
Redux Actions Dispatched
        ↓
Cart State Updated (Redux store)
        ↓
Components re-render with new state
```

---

## 🎓 What You'll Learn

1. ✅ Using React hooks (`useState`) for state management
2. ✅ Setting up and using Redux Toolkit in React
3. ✅ Dispatching actions and accessing state with Redux
4. ✅ Role-based conditional rendering
5. ✅ Building a functional e-commerce application
6. ✅ Managing multiple state sources (React + Redux)

---

## 📝 Notes for Evaluators

- **No Context API Used**: Authentication uses `useState` in App.jsx only
- **Redux for Business Logic**: Products and cart use Redux for scalability
- **Simple & Clean Code**: Easy to understand and follow
- **Proper Component Structure**: Separated concerns for maintainability
- **Working Demo**: Ready to run and test immediately

---

## 🚀 Commands

```bash
# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm preview

# Run linter
npm lint
```

---

## 📞 Questions?

Refer to the inline comments in the code for detailed explanations of each component and Redux slice.

---

**Created**: January 2026
**Student**: FSD-2 Batch
