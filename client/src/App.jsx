import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AddProduct from "./components/Dashboard/Products/AddProduct.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Hero from './Pages/Home/Hero.jsx';
import Footer from './components/Footer.jsx';
import Products from "./components/Dashboard/Products/ProductsList.jsx";
import ProductDetails from "./components/Dashboard/Products/ProductDetails.jsx";
import EditProduct from "./components/Dashboard/Products/EditProduct.jsx";
import { CartProvider } from './components/CartContext'; 

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/product" element={<Products />} /> 
          <Route path="/Add" element={<AddProduct />} /> 
          <Route path="/details/:id" element={<ProductDetails />} /> 
          <Route path="/update/:id" element={<EditProduct />} /> 
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap your AppContent with CartProvider */}
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
