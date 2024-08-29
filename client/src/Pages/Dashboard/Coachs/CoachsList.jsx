import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CoachsList.css'
import Dashbord from '../Dashbord'

const CoachList = () => {
    const [coaches, setCoaches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCoaches = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/coaches/');
                setCoaches(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching coaches');
                setLoading(false);
            }
        };

        fetchCoaches();
    }, []);

    const handleUpdateClick = (coach) => {
        navigate(`/ManageCoach/${coach.id}`);
    };

    const handleDeleteClick = async (coachId) => {
        if (window.confirm('Are you sure you want to delete this coach?')) {
            try {
                await axios.delete(`http://127.0.0.1:3000/api/coaches/${coachId}`);
                setCoaches(coaches.filter(coach => coach.id !== coachId)); 
            } catch (error) {
                setError('Error deleting coach. Please try again.');
                console.error('There was an error deleting the coach:', error);
            }
        }
    };

    const handleAddCoachClick = () => {
        navigate('/AddCoach');
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
        <Dashbord/>
        <div className="coach-list-container">
            <h1>Coach List</h1>
            <button className="add-coach-button" onClick={handleAddCoachClick}>
                Add Coach
            </button>
            <table className="coach-list-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialty</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {coaches.map(coach => (
                        <tr key={coach.id}>
                            <td>{coach.firstName}</td>
                            <td>{coach.lastName}</td>
                            <td>{coach.email}</td>
                            <td>{coach.phone}</td>
                            <td>{coach.specialty}</td>
                          
                            <td>
                                <button onClick={() => handleUpdateClick(coach)}>Update</button>
                                <button onClick={() => handleDeleteClick(coach.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default CoachList;
