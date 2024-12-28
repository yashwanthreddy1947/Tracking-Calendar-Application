import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Communication Tracker</h1>
      <p>Track your follow-ups with companies effectively!</p>
      <Link to="/calendar">Go to Calendar (click here!)</Link>
    </div>
  );
};

export default Dashboard;