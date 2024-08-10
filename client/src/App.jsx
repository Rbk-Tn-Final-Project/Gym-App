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
import AddCoach from "./Pages/Dashboard/Coachs/AddCoachs.jsx";
import CoachList from "./Pages/Dashboard/Coachs/CoachsList.jsx";
import ManageCoaches from "./Pages/Dashboard/Coachs/ManageCoachs.jsx";
import AddEvent from "./Pages/Dashboard/Planning/AddEvent.jsx";
import EventList from "./Pages/Dashboard/Planning/EventList.jsx";
import ManageEvent from "./Pages/Dashboard/Planning/ManageEvent.jsx";
import EventCalendar from "./Pages/Calendar/EventCalendar.jsx";

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
  <Route path="/AddCoach" element={<AddCoach/>} />
  <Route path="/CoachList" element={<CoachList/>} />
  <Route path="/ManageCoach/:id" element={<ManageCoaches/>} />
  <Route path="/AddEvent" element={<AddEvent/>} />
  <Route path="/EventList" element={<EventList/>} />
  <Route path="/ManageEvent/:id" element={<ManageEvent/>} />
  <Route path="/EventCalendar" element={<EventCalendar/>} />
  
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
