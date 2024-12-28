import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns';

const Calendar = ({ onDateClick }) => {
  const days = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });

  return (
    <div className="calendar">
      {days.map((day) => (
        <div
          key={day}
          className="day"
          onClick={() => onDateClick(format(day, 'yyyy-MM-dd'))}
        >
          {format(day, 'd')}
        </div>
      ))}
    </div>
  );
};

export default Calendar;