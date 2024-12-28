import React from 'react';

const EventList = ({ events, onDelete }) => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-item">
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Company: {event.company}</p>
          <button onClick={() => onDelete(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;