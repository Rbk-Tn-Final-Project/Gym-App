import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductsClientDetails.css';
import { useNavigate, useParams } from 'react-router-dom';


const ProductsClientDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getDetails();
  }, [id])

  const getDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/product/${id}`);
      setProduct(response.data);
      setSelectedImage(response.data.images[0])
    } catch (error) {
      console.error('Error fetching product details. Please try again later.', error);
    }
  };
  return (
    <div>
      {/* the little navbar */}
      <header role="banner" aria-label="Heading">
        <div className="header">
          <div className="_cont">
           
            <div className="mobile-menu">
              <form action="/search" method="get" id="find">
                <div>
                  <input type="text" name="q" id="find-input" className="find-input" placeholder="Search..." defaultValue="" />
                  <button type="submit" title="Search" id="find-btn">Search</button>
                </div>
              </form>
              <a id="customer_login_link">Sign In</a>
            </div>
            <span id="nav-icon"></span>
          </div>
        </div>
        <div className="breadcrumb" role="navigation" aria-label="Breadcrumbs">
          <div className="_cont">
            <ol>
              <li><a title="Back to the frontpage">Home</a></li>
              <li><a title="">Product</a></li>
              <li>Product Details</li>
            </ol>
          </div>
        </div>
      </header>


      {/* the content */}

      <section aria-label="Main content" role="main" className="product-detail">
        <div itemScope itemType="http://schema.org/Product">
          <meta itemProp="url" content="http://html-koder-test.myshopify.com/products/tommy-hilfiger-t-shirt-new-york" />
          <meta itemProp="image" content="//cdn.shopify.com/s/files/1/1047/6452/products/product_grande.png?v=1446769025" />
          <div className="shadow">
            <div className="_cont detail-top">
              <div className="cols">
                <div className="left-col">
                  <div className="thumbs">
                    {product.images && product.images.length > 0 &&
                      product.images.map((image, index) => (
                        <a className="thumb-image" href={image} data-index={index} onClick={(e) => {
                          e.preventDefault(); 
                          setSelectedImage(image); 
                        }}>
                          <span><img src={image} alt="Tommy Hilfiger T-Shirt New York" /></span>
                        </a>

                      ))}
                  </div>
                  <div className="big">
                    <div id="big-image" className="img" quickbeam="image" style={{ backgroundImage: `url(${selectedImage})`, width: "80%", height: "90%" }} data-src="//cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025">
                    <div></div>

                    <div className="detail-socials">
                      <div className="social-sharing" data-permalink="http://html-koder-test.myshopify.com/products/tommy-hilfiger-t-shirt-new-york">
                        <a target="_blank" className="share-facebook" title="Share"></a>
                        <a target="_blank" className="share-twitter" title="Tweet"></a>
                        <a target="_blank" className="share-pinterest" title="Pin it"></a>
                      </div>
                  </div>
                    </div>
                    <div id="banner-gallery" className="swipe">
                      <div className="swipe-wrap">
                        <div style={{ backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/product_large.png?v=1446769025')" }}></div>
                        <div style={{ backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko1_large.jpg?v=1447104179')" }}></div>
                        <div style={{ backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko2_large.jpg?v=1447104180')" }}></div>
                        <div style={{ backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko3_large.jpg?v=1447104182')" }}></div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="right-col">
                  <div className="product-info">
                    <h1 itemProp="name">{product.name}</h1>
                    <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
                      <meta itemProp="priceCurrency" content="USD" />
                      <link itemProp="availability" href="http://schema.org/InStock" />
                      <div className="price-shipping">
                        <div className="price" id="price-preview" quickbeam="price" quickbeam-price="800">
                          {product.price}$
                        </div>

                      </div>
                    </div>
                    <div className="swatches">
                      <div className="swatch clearfix" data-option-index="0">
                        <div className="header">Size</div>
                        <div data-value="M" className="swatch-element plain m available">
                          <input id="swatch-0-m" type="radio" name="option-0" value="M" defaultChecked />
                          <label htmlFor="swatch-0-m">
                            M
                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" alt="" />
                          </label>
                        </div>
                        <div data-value="L" className="swatch-element plain l available">
                          <input id="swatch-0-l" type="radio" name="option-0" value="L" />
                          <label htmlFor="swatch-0-l">
                            L
                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" alt="" />
                          </label>
                        </div>
                        <div data-value="XL" className="swatch-element plain xl available">
                          <input id="swatch-0-xl" type="radio" name="option-0" value="XL" />
                          <label htmlFor="swatch-0-xl">
                            XL
                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" alt="" />
                          </label>
                        </div>
                        <div data-value="XXL" className="swatch-element plain xxl available">
                          <input id="swatch-0-xxl" type="radio" name="option-0" value="XXL" />
                          <label htmlFor="swatch-0-xxl">
                            XXL
                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" alt="" />
                          </label>
                        </div>
                      </div>
                      <div className="swatch clearfix" data-option-index="1">
                        <div className="header">Color</div>
                        <div data-value="red" className="swatch-element color red available">
                          <input id="swatch-1-red" type="radio" name="option-1" value="red" defaultChecked />
                          <label htmlFor="swatch-1-red" style={{ borderColor: "red" }}>
                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" alt="" />
                            <span style={{ backgroundColor: "red" }}></span>
                          </label>
                        </div>
                        <div data-value="black" className="swatch-element color black available">
                          <input id="swatch-1-black" type="radio" name="option-1" value="black" />
                          <label htmlFor="swatch-1-black" style={{ borderColor: "black" }}>
                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" alt="" />
                            <span style={{ backgroundColor: "black" }}></span>
                          </label>
                        </div>
                        <div data-value="blue" className="swatch-element color blue available">
                          <input id="swatch-1-blue" type="radio" name="option-1" value="blue" />
                          <label htmlFor="swatch-1-blue" style={{ borderColor: "blue" }}>
                            <img className="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886" alt="" />
                            <span style={{ backgroundColor: "blue" }}></span>
                          </label>
                        </div>
                      </div>
                      .</div>
                    <div className="product-designer">
                      <span className="designer-name" itemProp="brand">Description</span>
                      <p className="designer-description">{product.description}</p>
                    </div>
                    <div className="cb"></div>
                    <div className="purchase">
                      <a href="#" id="add-to-cart" quickbeam="add-to-cart">
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="_cont detail-bot">
            </div>
          </div>
        </div>
      </section>
</div>
  )
}
export default ProductsClientDetails;
