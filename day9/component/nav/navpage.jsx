import React from 'react';
import { Link } from 'react-router-dom';
import '../../asserts/css/navpage.css'

const Navpage = () => {
  return (
    <nav>
    <ul>
      <div className="sknj">
      <li><Link to="/login">Login</Link></li>
      </div>
    </ul>
  </nav>
    );
}

export default Navpage;