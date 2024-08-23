import React from 'react';
import Hero from '../../components/Banner';
import WhyChoseUs from '../../components/Section1.jsx';
import Footer from '../../components/Footer';
import ClassesSection from '../../components/ClassesSection.jsx';
import Registration from '../../components/Registration.jsx';
import PricingPlan from '../../components/PricingPlan.jsx';
import OurTeam from '../../components/OurTeam.jsx';

const Home = () => {
   
    return (
        <div>
         
            <Hero />
            <WhyChoseUs />
            <ClassesSection/>
            <Registration/>
            <PricingPlan/>
            <OurTeam/>
          <Footer/>
        </div>
    );
};

export default Home;
