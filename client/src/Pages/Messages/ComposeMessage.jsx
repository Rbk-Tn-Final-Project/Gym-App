import React, { useState } from 'react';
import axios from 'axios';
import './Messages.css';

const ComposeMessage = () => {
    const [formData, setFormData] = useState({
        sender: '',
        recipient: '',
        subject: '',
        body: ''
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
            setFormData({ sender: '', recipient: '', subject: '', body: '' });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="compose-message-container">
            <h2>Compose Message</h2>
            <form onSubmit={handleSubmit}>
                <label>Sender:</label>
                <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />
                
                <label>Recipient:</label>
                <input type="text" name="recipient" value={formData.recipient} onChange={handleChange} required />
                
                <label>Subject:</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                
                <label>Body:</label>
                <textarea name="body" value={formData.body} onChange={handleChange} required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ComposeMessage;
