import React from 'react';
import Hero from '../../components/Banner';
import ProductsClient from '../../components/Section1.jsx';
import Footer from '../../components/Footer';
import IMCCalculator from '../../components/IMCCalculator';



const Home = () => {
   
    return (
        <div>
         
            <Hero />
            <IMCCalculator/>
            <ProductsClient />
          <Footer/>
        </div>
    );
};

export default Home;
