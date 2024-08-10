import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ManageEvent.css'

const UpdateEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        eventName: '',
        eventDate: '',
        eventTime: '',
        location: '',
        description: '',
        coachId: ''
    });
    const [coaches, setCoaches] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/planning/${id}`); // Adjust the endpoint as needed
                setEvent(response.data);
            } catch (err) {
                setError('Error fetching event details');
            }
        };

        const fetchCoaches = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/coaches/'); // Adjust the endpoint as needed
                setCoaches(response.data);
            } catch (err) {
                setError('Error fetching coaches');
            }
        };

        fetchEvent();
        fetchCoaches();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:3000/api/planning/${id}`, event);
            setMessage('Event updated successfully!');
            setTimeout(() => {
                navigate('/EventList'); 
            }, 2000);
        } catch (err) {
            setError('Error updating event');
        }
    };

    return (
        <div className="update-event-container">
            <h1>Update Event</h1>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleUpdate} className="update-event-form">
                <div>
                    <label>Event Name</label>
                    <input
                        type="text"
                        name="eventName"
                        value={event.eventName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Date</label>
                    <input
                        type="date"
                        name="eventDate"
                        value={event.eventDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Time</label>
                    <input
                        type="time"
                        name="eventTime"
                        value={event.eventTime}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={event.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Select Coach</label>
                    <select
                        name="coachId"
                        value={event.coachId}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select a coach</option>
                        {coaches.map(coach => (
                            <option key={coach.id} value={coach.id}>
                                {coach.firstName} {coach.lastName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Update Event</button>
            </form>
        </div>
    );
};

export default UpdateEvent;
