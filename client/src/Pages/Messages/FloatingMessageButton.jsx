import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingMessageButton.css';  // Import the CSS file

const FloatingMessageButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const isLoggedIn = Boolean(localStorage.getItem('token')); // Check if user is logged in

        if (isLoggedIn) {
            navigate('/compose-message'); // Redirect to compose message if logged in
        } else {
            navigate('/login', { state: { from: '/compose-message' } }); // Redirect to login with intent to compose message
        }
    };

    return (
        <div className="floating-message-button" onClick={handleClick}>
            <div className="dot"></div>
            <span>Message us</span>
        </div>
    );
};

export default FloatingMessageButton;