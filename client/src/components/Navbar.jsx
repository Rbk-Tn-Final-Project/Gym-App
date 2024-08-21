import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import './Navbar.css';
import CartContext from '../components/CartContext'; 
import { UserContext } from '../components/UserContext';

const NavBar = () => {
    const { cart } = useContext(CartContext);
    const { user } = useContext(UserContext); 
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    
    const isAdmin = user && user.role === 'admin';

    return (
        <>
        <div className='topPage'>
          <h4>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h4>
        </div>
          <Navbar bg="light" expand="lg">
              <Container>
                  <Navbar.Brand href="/"><h2>RBK GYM</h2></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link as={Link} to="/">Home</Nav.Link>
                          <Nav.Link></Nav.Link>
                          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                          <Nav.Link as={Link} to="/Calendars">Planning</Nav.Link>
                          <Nav.Link as={Link} to="/About">About</Nav.Link>
                          
                          <Nav.Link as={Link} to="/SignUp">Sign Up</Nav.Link>
                          <Nav.Link as={Link} to="/WishList"><i className="fas fa-heart"></i></Nav.Link>
                          <Nav.Link as={Link} to="/card" className="cart-icon">
                              <i className="fa-solid fa-bag-shopping"></i>
                              {cartItemCount > 0 && <span className="cart-counter">{cartItemCount}</span>}
                          </Nav.Link>
                          <Nav.Link as={Link} to="/Login"><i className="fas fa-user-circle"></i></Nav.Link>
                          
                          {isAdmin && (
                              <Nav.Link as={Link} to="/dashbord">
                                  <i className="fa-solid fa-table-columns"></i>
                              </Nav.Link>
                          )}
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          </>
    );
};

export default NavBar;
