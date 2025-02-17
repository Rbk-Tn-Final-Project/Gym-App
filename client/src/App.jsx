import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddProduct from "./Pages/Dashboard/Products/AddProduct.jsx";
import SignUp from './Pages/SignUp/SignUp.jsx';
import LoginPage from "./Pages/Login/Login.jsx";
import OffCanvasMenu from "./components/Navbar";
import Hero from './Pages/Home/Hero.jsx';
import Products from "./Pages/Dashboard/Products/ProductsList.jsx";
import ProductDetails from "./Pages/Dashboard/Products/ProductDetails.jsx";
import EditProduct from "./Pages/Dashboard/Products/EditProduct.jsx";
import { AuthProvider } from './components/AuthContext.jsx';
import { CartProvider } from './components/CartContext'; 
import { UserProvider } from './components/UserContext';
import Dashboard from "./Pages/Dashboard/Dashbord.jsx";
// import Layout from './Pages/Dashboard/Layout.jsx';
import AddCoach from "./Pages/Dashboard/Coachs/AddCoachs.jsx";
import CoachList from "./Pages/Dashboard/Coachs/CoachsList.jsx";
import ManageCoaches from "./Pages/Dashboard/Coachs/ManageCoachs.jsx";
import AddEvent from "./Pages/Dashboard/Planning/AddEvent.jsx";
import EventList from "./Pages/Dashboard/Planning/EventList.jsx";
import ManageEvent from "./Pages/Dashboard/Planning/ManageEvent.jsx";
import EventCalendar from "./Pages/Calendar/EventCalendar.jsx";
import PrivateRoute from './components/PrivateRoute';
import Inbox from "./Pages/Messages/Inbox.jsx";
import MessageDetail from "./Pages/Messages/MessageDetail.jsx";
import ComposeMessage from "./Pages/Messages/ComposeMessage.jsx";
import FloatingMessageButton from "./Pages/Messages/FloatingMessageButton.jsx";
import Chatbox from './Pages/Messages/Chatbox.jsx';
import ProductsClient from "./Pages/ProductsClient/ProductsClient.jsx";
import ProductsClientDetails from "./Pages/ProductsClient/ProductsClientDetails.jsx";
import BMICalculator from "./Pages/BMI calculator/BmiCalculator.jsx";
import OurTeam from "./Pages/Our Team/OurTeam.jsx";
import Error404 from "./Pages/404/404.jsx";
import Cart from "./Pages/card/card.jsx";
import Services from "./Pages/services/services.jsx";



function AppContent() {
  return (
    <>
  
  
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Dashbord" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/update/:id" element={<EditProduct />} />
          <Route path="/AddCoach" element={<AddCoach />} />
          <Route path="/Coachs" element={<CoachList />} />
          <Route path="/ManageCoach/:id" element={<ManageCoaches />} />
          <Route path="/AddEvent" element={<AddEvent />} />
          <Route path="/Events" element={<EventList />} />
          <Route path="/ManageEvent/:id" element={<ManageEvent />} />
          <Route path="/Calendars" element={<EventCalendar />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/messages/:id" element={<MessageDetail />} />
          <Route path="/compose-message" element={<ComposeMessage />} />
          <Route path="/ProductsClient" element={<ProductsClient />} />
          <Route path="/ProductsClientDetails" element={<ProductsClientDetails />} />
          <Route path="/BmiCalculator" element={<BMICalculator />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/services" element={<Services />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
     
      <Chatbox />
    </>
  );
}


function App() {
  return (
    <Router>
     
      <UserProvider>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
        </AuthProvider>
      </UserProvider>
      
    </Router>
  );
}

export default App;