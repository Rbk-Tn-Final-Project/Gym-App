import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddProduct from "./Pages/Dashboard/Products/AddProduct.jsx";
import SignUp from './Pages/SignUp/SignUp.jsx';
import Login from "./Pages/Login/Login.jsx";
import Navbar from "./components/Navbar";
import Hero from './Pages/Home/Hero.jsx';

import Products from "./Pages/Dashboard/Products/ProductsList.jsx";
import ProductDetails from "./Pages/Dashboard/Products/ProductDetails.jsx";
import EditProduct from "./Pages/Dashboard/Products/EditProduct.jsx";
import { CartProvider } from './components/CartContext'; 
import Dashboard from "./Pages/Dashboard/Dashbord.jsx";
import Layout from './Pages/Dashboard/Layout.jsx';

function AppContent() {
  return (
    <>
      <Navbar />
      <div className="content">
      <Routes>
  <Route path="/" element={<Hero />} />
  <Route path="/Dashbord" element={<Layout><Dashboard /></Layout>} />
  <Route path="/products" element={<Layout><Products /></Layout>} />
  <Route path="/add" element={<Layout><AddProduct /></Layout>} />
  <Route path="/details/:id" element={<Layout><ProductDetails /></Layout>} />
  <Route path="/SignUp" element={<SignUp />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/update/:id" element={<Layout><EditProduct /></Layout>} />
  
  
  <Route path="*" element={<div>404 Not Found</div>} />
</Routes>

      </div>
   
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider> 
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
