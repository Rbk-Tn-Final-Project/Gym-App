import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AddEvent.css'; // Import the CSS file

const AddPlanning = () => {
    const [coaches, setCoaches] = useState([]);
    const [planning, setPlanning] = useState({
        eventName: '',
        eventDate: '',
        eventTime: '',
        location: '',
        description: '',
        coachId: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchCoaches = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/coaches/'); // Adjust the endpoint as needed
                setCoaches(response.data);
            } catch (err) {
                setError('Error fetching coaches');
            }
        };

        fetchCoaches();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPlanning({
            ...planning,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:3000/api/planning/', planning); // Adjust the endpoint as needed
            setMessage('Planning event added successfully!');
            setPlanning({
                eventName: '',
                eventDate: '',
                eventTime: '',
                location: '',
                description: '',
                coachId: ''
            });
            setTimeout(() => {
                navigate('/eventlist'); 
            }, 2000);
        } catch (err) {
            setError('Error adding planning event');
        }
    };

    return (
        <div className="add-planning-container">
            <h1>Add Planning Event</h1>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="add-planning-form">
                <div>
                    <label>Event Name</label>
                    <input
                        type="text"
                        name="eventName"
                        value={planning.eventName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Date</label>
                    <input
                        type="date"
                        name="eventDate"
                        value={planning.eventDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Time</label>
                    <input
                        type="time"
                        name="eventTime"
                        value={planning.eventTime}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={planning.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={planning.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Select Coach</label>
                    <select
                        name="coachId"
                        value={planning.coachId}
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
                <button type="submit">Add Planning Event</button>
            </form>
        </div>
    );
};

export default AddPlanning;
