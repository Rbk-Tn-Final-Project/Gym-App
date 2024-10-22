import React, { useState } from 'react';
import axios from 'axios';
import './Messages.css';


const ComposeMessage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false); 
    const [error, setError] = useState(null); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true); 
        setError(null); 

        try {
            const response = await axios.post('http://localhost:3000/api/messages', formData);

            if (response.status === 201) {
                alert('Message sent successfully!');
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            } else {
                setError('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Error sending message. Please try again later.');
        } finally {
            setIsSending(false); 
        }
    };

    return (
        <><div className='conax'>
                <div className="compose-message-container">
            <h2>Compose Message</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                
                <label>Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                
                <button type="submit" disabled={isSending}>Send</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
        </div>
        </>

    );
};

export default ComposeMessage;