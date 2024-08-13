import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './EventCalendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        const fetchEventsAndCoaches = async () => {
            try {
                const [planningResponse, coachesResponse] = await Promise.all([
                    axios.get('http://127.0.0.1:3000/api/planning'),
                    axios.get('http://127.0.0.1:3000/api/coaches')
                ]);

                console.log('Events Response:', planningResponse.data);
                console.log('Coaches Response:', coachesResponse.data);

                const formattedCoaches = coachesResponse.data;
                setCoaches(formattedCoaches);

                const formattedEvents = planningResponse.data.planningEntries.map(event => {
                    const coach = formattedCoaches.find(c => c.id === event.coachId);
                    return {
                        id: event.id,
                        title: event.eventName,
                        start: new Date(`${event.eventDate}T${event.eventTime}`),
                        end: new Date(new Date(`${event.eventDate}T${event.eventTime}`).getTime() + 60 * 60 * 1000), // Assuming 1-hour duration
                        location: event.location,
                        description: event.description,
                        coach: coach ? `${coach.firstName || ''} ${coach.lastName || ''}` : 'N/A',
                    };
                });

                setEvents(formattedEvents);
                setFilteredEvents(formattedEvents);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching events:', err);
                setError('Error fetching events');
                setLoading(false);
            }
        };

        fetchEventsAndCoaches();
    }, []);

    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = events.filter(event =>
            event.coach.toLowerCase().includes(term)
        );
        setFilteredEvents(filtered);
    };

    const handleEventClick = async (event) => {
        try {
            const response = await axios.get(`http://127.0.0.1:3000/api/planning/${event.id}`);
            setSelectedEvent(response.data);
            setModalIsOpen(true);
        } catch (err) {
            setError('Error fetching event details');
        }
    };

    const eventStyleGetter = (event) => {
        const style = {
            backgroundColor: '#3174ad',
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block',
        };
        return { style };
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedEvent(null);
    };

    useEffect(() => {
        Modal.setAppElement('#root'); // Ensure this matches the ID of your root element
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="calendar-container">
            <h1>Event Calendar</h1>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search by Coach Name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </div>
            <Calendar
                localizer={localizer}
                events={filteredEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={eventStyleGetter}
                onSelectEvent={handleEventClick}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Event Details"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                {selectedEvent && (
                    <div>
                        <h2>{selectedEvent.eventName}</h2>
                        <p><strong>Date:</strong> {selectedEvent.eventDate}</p>
                        <p><strong>Time:</strong> {selectedEvent.eventTime}</p>
                        <p><strong>Location:</strong> {selectedEvent.location}</p>
                        <p><strong>Description:</strong> {selectedEvent.description}</p>
                        <p><strong>Coach:</strong> {selectedEvent.coachId || 'N/A'}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default EventCalendar;
