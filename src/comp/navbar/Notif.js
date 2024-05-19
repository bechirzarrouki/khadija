import React from 'react';
import Navbar from './Navbar';
import './Navbar.css';
const Notification= ({ message, type }) => {
  return (
    <div >
        <Navbar/>
<div className={`notification ${type}`}>
      {message}
    </div>
    </div>
    
  );
};

export default Notification ;
