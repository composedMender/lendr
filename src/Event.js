// Event component
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css'; // Import a CSS file for the styles


export const EventBlock = ({ event, onEventChange }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedEvent = { ...event, [name]: value };
    onEventChange(updatedEvent);
  };
  
  return (
    <div class="event-block">
      <label>
        Title:
        <div>
          <input
          type="text"
          name="title"
          value={event.title}
          onChange={handleInputChange}
          />
        </div>
      </label>
      <label>
        Description:
        <div>
          <input
          type="text"
          name="description"
          value={event.description}
          onChange={handleInputChange}
          />
          </div>
      </label>
      <label>
        Start Time:
        <div>
          <input
            type="text"
            name="startTime"
            value={event.startTime}
            onChange={handleInputChange}
          />
          <select
            name="startPeriod"
            value={event.startPeriod}
            onChange={handleInputChange}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </label>
      <label>
          End Time:
          <div>
            <input
              type="text"
              name="endTime"
              value={event.endTime}
              onChange={handleInputChange}
            />
            <select
              name="endPeriod"
              value={event.endPeriod}
              onChange={handleInputChange}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
      </label>
    </div>
  );
};

export const EventDisplay = ({ event, eventPosition, hour }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialSnapTime, setInitialSnapTime] = useState(event.startTime);
  const [snapTime, setSnapTime] = useState(event.startTime);
  const [containerOffset, setContainerOffset] = useState({ top: 0, left: 0 });

  const defaultHeight = 48;
  const eventTime = eventPosition * hour;


  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerHeight = containerRect.height;
        console.log("container height: " + containerHeight);

        // Calculate the delta between the initial position and current mouse position
        const delta = event.clientY - containerOffset.top;
        console.log("mouse Y: " + event.clientY);
        console.log("Element initial pos: " + containerRect.top);

        // Calculate the time difference based on the delta and time slot height
        const timeSlotHeight = containerHeight; // Assuming 24-hour time slots
        const timeDiff = Math.round(delta / timeSlotHeight);

        // Snap to the nearest time slot if it exceeds the threshold
        if (Math.abs(timeDiff) >= 0.5) {
          // Update the snap time based on the initial snap time
          const newSnapTime = initialSnapTime + timeDiff;
          hour++;

          // Update the snapped time and EventDisplay position
          setSnapTime(newSnapTime);
          containerRef.current.style.transform = `translateY(${timeDiff * timeSlotHeight}px)`;
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Add event listeners for mouse events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, initialSnapTime]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialSnapTime(snapTime);
    setContainerOffset(containerRef.current.getBoundingClientRect());
  };

  return (
    <div className="event-display" ref={containerRef} onMouseDown={handleMouseDown} style={{top: eventTime}}>
      <div className="event-box" >
        <div className="event-box-title">{event.title}</div>
        <div className="event-box-content">
          <p>Description: {event.description}</p>
          <p>Start Time: {snapTime} {event.startPeriod}</p>
          <p>End Time: {event.endTime} {event.endPeriod}</p>
        </div>
      </div>
    </div>
  );
};

