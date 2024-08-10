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
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/planning'); // Adjust the endpoint as needed
                const formattedEvents = response.data.map(event => ({
                    id: event.id,
                    title: event.eventName,
                    start: new Date(`${event.eventDate}T${event.eventTime}`),
                    end: new Date(`${event.eventDate}T${event.eventTime}`),
                    location: event.location,
                    description: event.description,
                    coach: event.coach ? `${event.coach.firstName} ${event.coach.lastName}` : 'N/A',
                }));
                setEvents(formattedEvents);
                setLoading(false);
            } catch (err) {
                setError('Error fetching events');
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="calendar-container">
            <h1>Event Calendar</h1>
            <Calendar
                localizer={localizer}
                events={events}
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
                        <p><strong>Coach:</strong> {selectedEvent.coach ? `${selectedEvent.coach.firstName} ${selectedEvent.coach.lastName}` : 'N/A'}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default EventCalendar;
