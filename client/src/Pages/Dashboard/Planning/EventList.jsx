import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EventList.css'; // Ensure the CSS file name is updated if needed

const PlanningList = () => {
    const [plannings, setPlannings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Add this line to use the navigate function

    useEffect(() => {
        const fetchPlannings = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/planning'); // Adjust the endpoint as needed
                setPlannings(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching plannings');
                setLoading(false);
            }
        };

        fetchPlannings();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this planning?')) {
            try {
                await axios.delete(`http://127.0.0.1:3000/api/planning/${id}`); 
                setPlannings(plannings.filter(planning => planning.id !== id));
            } catch (err) {
                setError('Error deleting planning');
            }
        }
    };

    const handleUpdateClick = (id) => {
        navigate(`/ManageEvent/${id}`); 
    };

    const handleAddEventClick = () => {
        navigate(`/AddEvent`)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="planning-list-container">
            <h1>Planning List</h1>
            <button className="add-event-button" onClick={handleAddEventClick}>
                Add Event
            </button>
            <table className="planning-list-table">
                <thead>
                    <tr>
                        <th>Planning Name</th>
                        <th>Planning Date</th>
                        <th>Planning Time</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Coach</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {plannings.map(planning => (
                        <tr key={planning.id}>
                            <td>{planning.eventName}</td>
                            <td>{planning.eventDate}</td>
                            <td>{planning.eventTime}</td>
                            <td>{planning.location}</td>
                            <td>{planning.description}</td>
                            
                            <td>
                                {planning.coach 
                                    ? `${planning.coach.firstName} ${planning.coach.lastName}` 
                                    : 'No Coach Assigned'}
                            </td>
                            <td>
                                <button onClick={() => handleUpdateClick(planning.id)} className='update-button'>Update</button>
                                <button onClick={() => handleDelete(planning.id)} className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlanningList;
