import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventModal from '../components/EventModal';
import EventList from '../components/EventList';
import CompanyFilter from '../components/CompanyFilter';

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filter, setFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const filteredEvents = events.filter(
    (event) => !filter || event.company.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Calendar</h1>
      <CompanyFilter setFilter={setFilter} />
      <Calendar
        onDateClick={(date) => {
          setSelectedDate(date);
          setModalOpen(true);
        }}
      />
      <EventList
        events={filteredEvents.filter((event) => event.date === selectedDate)}
        onDelete={deleteEvent}
      />
      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={addEvent}
      />
    </div>
  );
};

export default CalendarPage;