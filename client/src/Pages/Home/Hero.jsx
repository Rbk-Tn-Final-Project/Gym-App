import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/Hero';
import Section1 from '../../components/Section1';





const Home = () => {
    const navigate = useNavigate();

    const handleViewAllProducts = () => {
        navigate('/products');
    };

    return (
        <div>
            <Hero />
            <Section1 />
          
        </div>
    );
};

export default Home;
