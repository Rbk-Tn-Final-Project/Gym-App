import React, { useContext, useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';
import CartContext from '../../components/CartContext'; // Update path if necessary
import './Card.css';

const CardPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (Array.isArray(cart)) {
      const calculateTotalPrice = () => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);
      };

      calculateTotalPrice();
    }
  }, [cart]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  if (!Array.isArray(cart)) {
    return <div>Error: Cart is not an array</div>;
  }

  return (
    <>
      <Navbar />
      <section className="breadcrumb-section set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>Cart</h2>
                <div className="bt-option">
                  <a href="./">Home</a>
                  <span>Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contx">
        <Container>
          <Row xs={1} sm={2} md={3} lg={2} className="g-4">
            {cart.map(item => (
              <Col key={item.id}>
                <Card>
                  <Card.Img className="Container" variant="top" src={item.img} alt={item.name} />
                  <Card.Body>
                    <Card.Title>{truncateText(item.name, 7)}</Card.Title>
                    <Card.Text>
                      {truncateText(item.description, 5)}
                      <br />
                      <strong className="price">${item.price}</strong>
                      <br />
                      Quantity: {item.quantity}
                    </Card.Text>
                    <ButtonGroup className="button-group">
                      <Button className="bt1" variant="danger" onClick={() => decrementQuantity(item.id)}>-</Button>
                      <Button className="bt2" variant="success" onClick={() => incrementQuantity(item.id)}>+</Button>
                    </ButtonGroup>
                    <Button className="btR" variant="primary" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="total-price">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CardPage;
