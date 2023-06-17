// Box.js
import React from 'react';
import PropTypes from 'prop-types';

import './App.css'; // Import a CSS file for the styles

const TimeBar = ({ title, children }) => {
  return (
    <div class="timebar-container">
      <p>6 AM</p>
      <p>7 AM</p>
      <p>8 AM</p>
      <p>9 AM</p>
      <p>10 AM</p>
      <p>11 AM</p>
      <p>12 PM</p>
      <p>1 PM</p>
      <p>2 PM</p>
      <p>3 PM</p>
      <p>4 PM</p>
      <p>5 PM</p>
    </div>
  );
};

export default TimeBar;