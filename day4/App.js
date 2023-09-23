import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import './App.css';
import Signup from './component/signup';
import Dashboard from './component/dashboard';
import Navpage from './component/nav/navpage';
import About from './component/About';
import MyResumes from './component/MyResumes';
import ResumeTemplates from './component/ResumeTemplates';
import Contact from './component/Contact';
function App() {


  return (
    <>
    <Router>
      
       <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/navpage" element={<Navpage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/my-resumes" element={<MyResumes/>} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
    </Router>
    </>
  );
}

export default App;
