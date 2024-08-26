import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ManageCoachs.css'



const ManageCoach = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [coach, setCoach] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialty: '',
        picture: ''
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCoach = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/coaches/${id}`);
                setCoach(response.data);
            } catch (err) {
                console.error('Error fetching coach:', err);
            }
        };

        fetchCoach();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCoach({
            ...coach,
            [name]: value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:3000/api/coaches/${id}`, coach);
            setMessage('Coach updated successfully!');
            setTimeout(() => {
                navigate('/Coachs');
            }, 2000);
        } catch (error) {
            setMessage('Error updating coach. Please try again.');
            console.error('Error updating coach:', error);
        }
    };

    return (
        <div className='manage-coach-container'>
            <h1>Update Coach</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleUpdate}>
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
               
                <button type="submit">Update Coach</button>
            </form>
        </div>
    );
};

export default ManageCoach;
