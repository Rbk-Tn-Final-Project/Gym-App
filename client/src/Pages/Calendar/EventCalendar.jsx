import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './EventCalendar.css';
import Navbar from '../../components/Navbar';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCoach, setSelectedCoach] = useState('');
    const [selectedEventName, setSelectedEventName] = useState('');
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        const fetchEventsAndCoaches = async () => {
            try {
                const [planningResponse, coachesResponse] = await Promise.all([
                    axios.get('http://127.0.0.1:3000/api/planning'),
                    axios.get('http://127.0.0.1:3000/api/coaches')
                ]);

                const formattedCoaches = coachesResponse.data;
                setCoaches(formattedCoaches);

                const formattedEvents = planningResponse.data.planningEntries.map(event => {
                    const coach = formattedCoaches.find(c => c.id === event.coachId);
                    return {
                        id: event.id,
                        title: event.eventName,
                        start: new Date(`${event.eventDate}T${event.eventTime}`),
                        end: new Date(new Date(`${event.eventDate}T${event.eventTime}`).getTime() + 60 * 60 * 1000),
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

    const handleCoachChange = (e) => {
        const coachName = e.target.value;
        setSelectedCoach(coachName);
        filterEvents(coachName, selectedEventName);
    };

    const handleEventNameChange = (e) => {
        const eventName = e.target.value;
        setSelectedEventName(eventName);
        filterEvents(selectedCoach, eventName);
    };

    const filterEvents = (coachName, eventName) => {
        let filtered = events;
        if (coachName) {
            filtered = filtered.filter(event => event.coach === coachName);
        }
        if (eventName) {
            filtered = filtered.filter(event => event.title === eventName);
        }
        setFilteredEvents(filtered);
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setModalIsOpen(true);
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
        Modal.setAppElement('#root');
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
        <Navbar/>
        <section className="breadcrumb-section set-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb-text">
                            <h2>Our Classes</h2>
                            <div className="bt-option">
                                <a href="./">Home</a>
                                <a href="#">Pages</a>
                                <span>Our Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='coo'>
            <div className="calendar-container">
                <h1>Event Calendar</h1>
                <div className="dropdown-container">
                    <select
                        value={selectedCoach}
                        onChange={handleCoachChange}
                        className="dropdown"
                        aria-label="Select Coach"
                    >
                        <option value="">All Coaches</option>
                        {coaches.map(coach => (
                            <option key={coach.id} value={`${coach.firstName} ${coach.lastName}`}>
                                {coach.firstName} {coach.lastName}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedEventName}
                        onChange={handleEventNameChange}
                        className="dropdown"
                        aria-label="Select Event"
                    >
                        <option value="">All Events</option>
                        {events.map(event => (
                            <option key={event.id} value={event.title}>
                                {event.title}
                            </option>
                        ))}
                    </select>
                </div>
                <Calendar
                    localizer={localizer}
                    events={filteredEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    eventPropGetter={eventStyleGetter}
                    onSelectEvent={handleEventClick}
                    min={new Date(1970, 1, 1, 8, 0, 0)}
                    max={new Date(1970, 1, 1, 22, 0, 0)}
                />

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Event Details"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    {selectedEvent && (
                        <div className='detailsev'>
                            <h2>{selectedEvent.title}</h2>
                            <p><strong>Date:</strong> {selectedEvent.start.toDateString()}</p>
                            <p><strong>Time:</strong> {selectedEvent.start.toLocaleTimeString()}</p>
                            <p><strong>Location:</strong> {selectedEvent.location}</p>
                            <p><strong>Description:</strong> {selectedEvent.description}</p>
                            <p><strong>Coach:</strong> {selectedEvent.coach || 'N/A'}</p>
                            <button className='closebtn' onClick={closeModal}>Close</button>
                        </div>
                    )}
                </Modal>
            </div>
        </div>
        </>
    );
};

export default EventCalendar;
