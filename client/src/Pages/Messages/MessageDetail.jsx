import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Messages.css';

const MessageDetail = () => {
    const { id } = useParams();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetchMessage();
    }, []);

    const fetchMessage = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/messages/${id}`);
            setMessage(response.data);
        } catch (error) {
            console.error('Error fetching message:', error);
        }
    };

    if (!message) return <div>Loading...</div>;

    return (
        <div className="message-detail-container">
            <h2>{message.subject}</h2>
            <p>{message.body}</p>
            <p><strong>From:</strong> {message.sender}</p>
        </div>
    );
};

export default MessageDetail;
