import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EventList.css';

const PlanningList = () => {
    const [plannings, setPlannings] = useState([]);
    const [coaches, setCoaches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [planningResponse, coachesResponse] = await Promise.all([
                    axios.get('http://127.0.0.1:3000/api/planning'),
                    axios.get('http://127.0.0.1:3000/api/coaches')
                ]);

                console.log('Plannings Response:', planningResponse.data);
                console.log('Coaches Response:', coachesResponse.data);

                const { planningEntries, coachs } = planningResponse.data;
                setPlannings(planningEntries);

                if (Array.isArray(coachesResponse.data)) {
                    setCoaches(coachesResponse.data);
                } else {
                    console.warn('Unexpected response format for coaches:', coachesResponse.data);
                    setCoaches([]);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
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
        navigate(`/AddEvent`);
    };
    
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
                    {plannings.map(planning => {
                        const coach = coaches.find(c => c.id === planning.coachId);
                        return (
                            <tr key={planning.id}>
                                <td>{planning.eventName}</td>
                                <td>{planning.eventDate}</td>
                                <td>{planning.eventTime}</td>
                                <td>{planning.location}</td>
                                <td>{planning.description}</td>
                                <td>{coach ? `${coach.firstName} ${coach.lastName}` : 'Unknown'}</td>
                                <td>
                                    <button onClick={() => handleUpdateClick(planning.id)} className='update-button'>Update</button>
                                    <button onClick={() => handleDelete(planning.id)} className="delete-button">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PlanningList;
