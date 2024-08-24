import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Messages.css';

const Inbox = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    return (
        <>
        <div className="inbox-container">
            <h2>Inbox</h2>
            <ul className="message-list">
                {messages.map((message) => (
                    <li key={message.id} className="message-item">
                        <Link to={`/messages/${message.id}`}>
                            <span className="message-sender">{message.sender}</span>
                            <span className="message-subject">{message.subject}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default Inbox;
