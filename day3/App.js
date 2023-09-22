import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Signup from './component/signup';


function App() {
  return (
    <Router>
      <div className='App'>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
