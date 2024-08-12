import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingMessageButton.css';

const FloatingMessageButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/compose-message');
    };

    return (
        <div className="floating-message-button" onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM11 11H8.5V9.5H11V7L14 10L11 13V11ZM16 16H8V14H16V16Z" fill="currentColor"/>
            </svg>
        </div>
    );
};

export default FloatingMessageButton;
