import React, { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.css';
import { UserContext } from '../components/UserContext'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useContext(UserContext);
  const isAdmin = user && user.role === 'admin';

  return (
    <header className="header-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
              <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/ProductsClient">Our Shop</Link></li>
                <li><Link to="/Calendars">Classes</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/OurTeam">Our Team</Link></li>
                <li><Link to="/BMICalculator">BMI Calculator</Link></li>
                <li><Link to="/SignUp">Sign Up</Link></li>
                <li><Link to="/login"><i className="fas fa-user-circle"></i></Link></li>
                <li><Link to="/Cart"><i className="fa-solid fa-bag-shopping"></i></Link></li>
                {isAdmin && (
                  <li><Link to="/dashbord"><i className="fa-solid fa-table-columns"></i></Link></li>
                )}
              </ul>
            </nav>
          </div>
        </div>
        <div className="canvas-open" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <div className={`offcanvas-menu-wrapper ${isOpen ? 'open' : ''}`}>
          <div className="canvas-close" onClick={toggleMenu}>
            <i className="fa fa-times"></i>
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active"><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/ProductsClient" onClick={toggleMenu}>Our Shop</Link></li>
              <li><Link to="/Calendars" onClick={toggleMenu}>Classes</Link></li>
              <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
              <li><Link to="/OurTeam" onClick={toggleMenu}>Our Team</Link></li>
              <li><Link to="/BMICalculator" onClick={toggleMenu}>BMI Calculator</Link></li>
              <li><Link to="/SignUp" onClick={toggleMenu}>Sign Up</Link></li>
              <li><Link to="/login" onClick={toggleMenu}><i className="fas fa-user-circle"></i></Link></li>
              <li><Link to="/*" onClick={toggleMenu}><i className="fa-solid fa-bag-shopping"></i></Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
