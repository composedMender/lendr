// Box.js
import React from 'react';
import PropTypes from 'prop-types';

import './App.css'; // Import a CSS file for the styles
import styles from './App.module.css';

const Calendar = ({ title, children }) => {
  const timeSlots = [];
  for (let hour = 0; hour <= 23; hour++) {
    const timeSlot = (
      <p key={hour} className="time-slot">
        {hour}:00
      </p>
    );
    timeSlots.push(timeSlot);
  }

  return (
    <div className="box calendar">
      <div className="box-title">
        {title}
      </div>
      <div className="calendar-content-container">
        <div className="timetable">
          {timeSlots}
        </div>
        <div className='calendar-day-container'>
          <div className="box-content calendar-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Calendar;