// Box.js
import React from 'react';
import PropTypes from 'prop-types';

import './App.css'; // Import a CSS file for the styles

const Box = ({ title, children }) => {
  return (
    <div className="box">
      <div className="box-title">
        {title}
      </div>
      <div className="box-content">
        {children}
      </div>
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Box;