import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AddCoachs.css';
import Dashbord from '../Dashbord'

const AddCoach = () => {
    const [coach, setCoach] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialty: '',
        picture: ''
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCoach({
            ...coach,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:3000/api/coaches/', coach);
            setMessage('Coach added successfully!');
            setCoach({ firstName: '', lastName: '', email: '', phone: '', specialty: '', picture: '' });
            
            setTimeout(() => {
                navigate('/Coachs'); // Redirect to the CoachList page after 2 seconds
            }, 2000);
        } catch (error) {
            setMessage('Error adding coach. Please try again.');
            console.error('There was an error adding the coach:', error);
        }
    };

    return (
        <>
        <Dashbord/>
        <div className='add-coach-container'>
            <h1>Add Coach</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={coach.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={coach.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={coach.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={coach.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Specialty</label>
                    <input
                        type="text"
                        name="specialty"
                        value={coach.specialty}
                        onChange={handleInputChange}
                    />
                </div>
               
                <button type="submit">Add Coach</button>
            </form>
        </div>
        </>
    );
};

export default AddCoach;
