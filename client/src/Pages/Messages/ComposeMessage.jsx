import React, { useState } from 'react';
import axios from 'axios';
import './Messages.css';
import './FloatingMessageButton.css';


const ComposeMessage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/messages', formData);
            alert('Message sent successfully!');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="compose-message-container">
            <h2>Compose Message</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ComposeMessage;
