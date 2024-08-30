import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductsClientDetails.css';
import { useNavigate, useParams } from 'react-router-dom';

const ProductsClientDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getDetails();
  }, [id]);

  const getDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/product/${id}`);
      setProduct(response.data);
      console.log(response.data,'azedazda');
      
      setSelectedImage(response.data.images?.[0] || 'default-image-url'); // Set the first image or a default image
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <div>
    
      <section aria-label="Main content" role="main" className="product-detail">
        <div itemScope itemType="http://schema.org/Product">
          <meta itemProp="url" content={`http://yourstore.com/products/${id}`} />
          <meta itemProp="image" content={selectedImage} />
          <div className="shadow">
            <div className="_cont detail-top">
              <div className="cols">
                <div className="left-col">
                  <div className="thumbs">
                    {product.images && product.images.length > 0 &&
                      product.images.map((image, index) => (
                        <a
                          key={index}
                          className="thumb-image"
                          href={image}
                          data-index={index}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedImage(image);
                          }}
                          aria-label={`Thumbnail image ${index + 1}`}
                        >
                          <span><img src={image} alt={`Product image ${index + 1}`} /></span>
                        </a>
                      ))}
                  </div>
                  <div className="big">
                    <span
                      id="big-image"
                      className="img"
                      quickbeam="image"
                      style={{ backgroundImage: `url(${selectedImage})`, backgroundSize: 'contain' }}
                      data-src={selectedImage}
                      role="img"
                      aria-label="Selected product image"
                    ></span>
                  </div>
                </div>
                <div className="right-col">
                  <h1 itemProp="name">{product.name || 'Product Name'}</h1>
                  <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="USD" />
                    <link itemProp="availability" href="http://schema.org/InStock" />
                    <div className="price-shipping">
                      <div className="price" id="price-preview" quickbeam="price" quickbeam-price={product.price || 0}>
                        ${product.price || '0.00'}
                      </div>
                      <a>Free shipping</a>
                    </div>
                    <div className="swatches">
                    
                    </div>
                    <div className="product-designer">
                      <span className="designer-name" itemProp="brand">{product.brand || 'Brand Name'}</span>
                      <p className="designer-description">{product.description || 'Product Description'}</p>
                    </div>
                    <div className="purchase">
                      <a href="*" id="add-to-cart" quickbeam="add-to-cart">Add to Cart</a>
                      <a href="#">Read Full Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsClientDetails;
