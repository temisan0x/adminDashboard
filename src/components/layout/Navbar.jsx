import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between"></div>
        <h1 className="text-white text-lg font-bold">WeCare</h1>
        <h3>Medical Admin DAshboard</h3>
        <h3>MainMenu</h3>
        <Link to="/">Overview</Link>
        <Link to="/patient">Patient</Link>
        <Link to="/appointment">Appointment</Link>
      </div>
  );
};


export default Navbar