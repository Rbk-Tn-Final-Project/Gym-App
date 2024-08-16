import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingMessageButton.css';  // Import the CSS file

const FloatingMessageButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/compose-message');
    };

    return (
        <div className="floating-message-button" onClick={handleClick}>
            <div className="dot"></div>
            <span>Message us</span>
        </div>
    );
};

export default FloatingMessageButton;
