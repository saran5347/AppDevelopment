import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import './App.css';
import Signup from './component/signup';
import Dashboard from './component/dashboard';
import Navpage from './component/nav/navpage';
import MyResumes from './component/MyResumes';
import ResumeTemplates from './component/ResumeTemplates';
import Contact from './component/Contact';
import Footer from './Footer';
import PrivacyPolicy from './component/Privacy';
import TermsAndConditions from './component/Terms';
import Aboutus from './component/Aboutus';
import Login from './component/login';
import Adminlogin from './component/AdminLogin';
import Faq from './component/Faq';
import Landing from './component/Landing';
import Home from './component/Home';
import Newdashboard from './component/Newdashboard';
function App() {


  return (
    <>
    <Router>
      
       <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/adminlogin" element={<Adminlogin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/navpage" element={<Navpage />} />
        <Route path="/my-resumes" element={<MyResumes/>} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newdashboard" element={<Newdashboard/>} />

       </Routes>
    </Router>
    </>
  );
}

export default App;
