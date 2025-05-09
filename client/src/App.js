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
import Contact from './customer/pages/ContactPage/Contact';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navigation />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/san-pham" element={<AllProduct />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;