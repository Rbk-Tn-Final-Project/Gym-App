import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddProduct from "./Pages/Dashboard/Products/AddProduct.jsx";
import SignUp from './Pages/SignUp/SignUp.jsx';
import LoginPage from "./Pages/Login/Login.jsx";
import Navbar from "./components/Navbar";
import Hero from './Pages/Home/Hero.jsx';

import Products from "./Pages/Dashboard/Products/ProductsList.jsx";
import ProductDetails from "./Pages/Dashboard/Products/ProductDetails.jsx";
import EditProduct from "./Pages/Dashboard/Products/EditProduct.jsx";
import { CartProvider } from './components/CartContext'; 
import { UserProvider } from './components/UserContext';
import Dashboard from "./Pages/Dashboard/Dashbord.jsx";
import Layout from './Pages/Dashboard/Layout.jsx';
import AddCoach from "./Pages/Dashboard/Coachs/AddCoachs.jsx";
import CoachList from "./Pages/Dashboard/Coachs/CoachsList.jsx";
import ManageCoaches from "./Pages/Dashboard/Coachs/ManageCoachs.jsx";
import AddEvent from "./Pages/Dashboard/Planning/AddEvent.jsx";
import EventList from "./Pages/Dashboard/Planning/EventList.jsx";
import ManageEvent from "./Pages/Dashboard/Planning/ManageEvent.jsx";
import EventCalendar from "./Pages/Calendar/EventCalendar.jsx";

import Inbox from "./Pages/Messages/Inbox.jsx";
import MessageDetail from "./Pages/Messages/MessageDetail.jsx";
import ComposeMessage from "./Pages/Messages/ComposeMessage.jsx";
import FloatingMessageButton from "./Pages/Messages/FloatingMessageButton.jsx";
import Shop from "./Pages/ProductsClient/ProductsClient.jsx";
import ShopDetails from "./Pages/ProductsClient/ProductsClientDetails.jsx";
import Chatbox from './Pages/Messages/Chatbox.jsx';

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopDetails/:id" element={< ShopDetails />} />

          <Route path="/update/:id" element={<Layout><EditProduct /></Layout>} />
          <Route path="/AddCoach" element={<Layout><AddCoach/></Layout>} />
          <Route path="/Coachs" element={<Layout><CoachList/></Layout>} />
          <Route path="/ManageCoach/:id" element={<Layout><ManageCoaches/></Layout>} />
          <Route path="/AddEvent" element={<Layout><AddEvent/></Layout>} />
          <Route path="/Events" element={<Layout><EventList/></Layout>} />
          <Route path="/ManageEvent/:id" element={<Layout><ManageEvent/></Layout>} />
          <Route path="/Calendars" element={<EventCalendar/>} />
          <Route path="/inbox" element={<Layout><Inbox /></Layout>} />
          <Route path="/messages/:id" element={<Layout><MessageDetail /></Layout>} />
          <Route path="/compose-message" element={<Layout><ComposeMessage /></Layout>} />
          
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      <Chatbox /> {/* Add Chatbox here */}
    </>
  );
}

function App() {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
