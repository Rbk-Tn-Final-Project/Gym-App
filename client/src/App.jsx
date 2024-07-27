
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Navbar from "./components/Navbar";
import Hero from './Pages/Home/Hero.jsx';

import Footer from './components/Footer.jsx';

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero/>} /> 
     
          
        </Routes>
      </div>
      <Footer />
    </>
  );
}


function App() {
  
  return (
   
    <Router>
      <AppContent />
    </Router>

  );
}

export default App;
