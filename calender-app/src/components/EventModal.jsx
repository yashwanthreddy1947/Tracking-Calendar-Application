import React, { useState } from 'react';

const EventModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = () => {
    onSave({ title, date, company });
    onClose();
  };

  return isOpen ? (
    <div className="modal">
      <h2>Add Event</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
        type="date"
      />
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  ) : null;
};

export default EventModal;