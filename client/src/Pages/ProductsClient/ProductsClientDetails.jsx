import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductsClientDetails.css';
import { useNavigate, useParams } from 'react-router-dom';

const ProductsClientDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [selectedImage, setSelectedImage] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
        getDetails();
    }, [id])
    
    const getDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/product/${id}`);
          setProduct(response.data);
          setSelectedImage(response.data.images[0])
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  return (
    <div>
      <header role="banner" aria-label="Heading">
  <div className="header">
    <div className="_cont">
      <div className="shadow">
        <a className="logo" title="Home" href="https://github.com/greenwoodents/quickbeam.js">Quickbeam.js Demo</a>
      </div>
      <div className="mobile-menu">
        <form action="/search" method="get" id="find">
          <div>
            <input type="text" name="q" id="find-input" className="find-input" placeholder="Search..." defaultValue="" />
            <button type="submit" title="Search" id="find-btn">Search</button>
          </div>
        </form>
        <a id="customer_login_link">Sign In</a>
        <nav role="navigation" aria-label="Catalog">
          <ul>
            <li className="nc nav-li-category">
              <a className="nc nav-category" data-subcategories="1">Women</a>
              <ul className="nc"></ul>
            </li>
            <li className="nc nav-li-category">
              <a className="nc nav-category" data-subcategories="1">Men</a>
              <ul className="nc"></ul>
            </li>
          </ul>
        </nav>
      </div>
      <span id="nav-icon"></span>
    </div>
  </div>
  <div className="breadcrumb" role="navigation" aria-label="Breadcrumbs">
    <div className="_cont">
      <ol>
        <li><a title="Back to the frontpage">Home</a></li>
        <li><a title="">Men</a></li>
        <li>Tony Hunfinger T-Shirt New York</li>
      </ol>
    </div>
  </div>
</header>

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
              <a className="thumb-image" href={image} data-index={index}               onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                setSelectedImage(image); // Set the selected image
              }}>
                <span><img  src={image} alt="Tommy Hilfiger T-Shirt New York" /></span>
              </a>
              /* <a className="thumb-image" href="//cdn.shopify.com/s/files/1/1047/6452/products/tricko3_1024x1024.jpg?v=1447104182" data-index="3">
                <span><img src="//cdn.shopify.com/s/files/1/1047/6452/products/tricko3_150x150.jpg?v=1447104182" alt="Tommy Hilfiger T-Shirt New York" /></span>
              </a> */
             ))} 
            </div>
            <div className="big">
              <span id="big-image" className="img" quickbeam="image" style={{ backgroundImage: `url(${selectedImage})`,backgroundSize: 'contain' }} data-src="//cdn.shopify.com/s/files/1/1047/6452/products/product_1024x1024.png?v=1446769025"></span>
              <div id="banner-gallery" className="swipe">
                <div className="swipe-wrap">
                  <div style={{ backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/product_large.png?v=1446769025')" }}></div>
                  <div style={{ backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko1_large.jpg?v=1447104179')" }}></div>
                  <div style={{ backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko2_large.jpg?v=1447104180')" }}></div>
                  <div style={{ backgroundImage: "url('//cdn.shopify.com/s/files/1/1047/6452/products/tricko3_large.jpg?v=1447104182')" }}></div>
                </div>
              </div>
              <div className="detail-socials">
                <div className="social-sharing" data-permalink="http://html-koder-test.myshopify.com/products/tommy-hilfiger-t-shirt-new-york">
                  <a target="_blank" className="share-facebook" title="Share"></a>
                  <a target="_blank" className="share-twitter" title="Tweet"></a>
                  <a target="_blank" className="share-pinterest" title="Pin it"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-col">
            <h1 itemProp="name">Tony Hunfinger T-Shirt New York</h1>
            <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
              <meta itemProp="priceCurrency" content="USD" />
              <link itemProp="availability" href="http://schema.org/InStock" />
              <div className="price-shipping">
                <div className="price" id="price-preview" quickbeam="price" quickbeam-price="800">
                  $800.00
                </div>
                <a>Free shipping</a>
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
              </div>
              <div className="product-designer">
                <span className="designer-name" itemProp="brand">Tony Hunfinger</span>
                <p className="designer-description">If it makes you feel beautiful, then do it.</p>
              </div>
              <div className="cb"></div>
              <div className="purchase">
                <a href="#" id="add-to-cart" quickbeam="add-to-cart">Add to Cart</a>
                <a href="#">Read Full Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_cont detail-bot">
        <div className="cols">
          <div className="left-col col-sm">
            <h2>About the Designer</h2>
            <p>
              Tony Hunfinger is a recognized name in the fashion industry, known for his iconic designs that fuse contemporary style with classic elegance. Each piece in his collection tells a story of innovation and attention to detail, making every garment not just a product, but a statement.
            </p>
            <h2>Product Details</h2>
            <ul>
              <li>100% Organic Cotton</li>
              <li>Machine washable</li>
              <li>Available in multiple colors</li>
              <li>Customizable with your own text or design</li>
            </ul>
            <h2>Shipping Information</h2>
            <p>
              We offer worldwide shipping with express delivery options. Free standard shipping on orders over $100.
            </p>
          </div>
          <div className="right-col col-sm">
            <div className="reviews">
              <h2>Customer Reviews</h2>
              <p>See what our customers are saying about this product.</p>
            </div>
            <div className="related-products">
              <h2>Related Products</h2>
              <p>Check out some of our other popular items.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ProductsClientDetails
