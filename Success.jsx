import React from 'react';
import './Success.css';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <h1>Registration Successful!</h1>
        <p>Your registration was completed successfully.</p>
        <Link to="/" className="back-home">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default Success;
