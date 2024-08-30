import React, { useContext } from 'react';
import WishlistContext from '../../components/WishListContex';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './WishList.css';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <Row>
          {wishlist.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    Price: ${product.price} <br />
                    Discount: {product.discount}%
                  </Card.Text>
                  <Button style={{border:'1px solid'}} variant="danger" onClick={() => handleRemoveFromWishlist(product.id)}>
                    Remove from Wishlist
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default WishlistPage;
