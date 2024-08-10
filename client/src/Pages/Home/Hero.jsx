import React from 'react';
import Hero from '../../components/Banner';
import Section1 from '../../components/Section1';
import Footer from '../../components/Footer';
import IMCCalculator from '../../components/IMCCalculator';



const Home = () => {
   
    return (
        <div>
         
            <Hero />
            <IMCCalculator/>
            <Section1 />
          <Footer/>
        </div>
    );
};

export default Home;
