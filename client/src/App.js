import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Product from './customer/components/product/Product.jsx';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/footer/footer.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx'
import Cart from './customer/components/Cart/Cart.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import AllProduct from './customer/components/product/AllProduct.jsx';
import Contact from './customer/pages/ContactPage/Contact.jsx';
import Login from './customer/components/Account/Login.jsx';
import Register from './customer/components/Account/Register.jsx';
import DashBoard from './Admin/DashBoard.jsx';
import AddProduct from './Admin/AddProduct.jsx';
import { AuthProvider } from './customer/components/Auth/AuthContext.jsx';
import ProtectedRoute from './customer/components/Auth/ProtectedRoute.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/cart"
            element={<ProtectedRoute element={Cart} />}
          />
          <Route
            path="/checkout"
            element={<ProtectedRoute element={Checkout} />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute element={DashBoard} />}
          />
          <Route
            path="/add-product"
            element={<ProtectedRoute element={AddProduct} />}
          />

          <Route path="/" element={<HomePage />} />
          <Route path="/san-pham" element={<AllProduct />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  );
}

export default App;

{/* <BrowserRouter>
<Navigation />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/san-pham" element={<AllProduct />} />
    <Route path="/products" element={<Product />} />
    <Route path="/product/:productId" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/lien-he" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/admin" element={<DashBoard />} />
    <Route path="/add-product" element={<AddProduct />} />

  </Routes>
<Footer />
</BrowserRouter> */}