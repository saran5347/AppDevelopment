import React from 'react';
import "../../src/asserts/css/Aboutus.css"
import Footer from '../Footer';


function Aboutus() {
  return (
  <>
    <div className="about-us-container">
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to [Resume Builder], your trusted partner in crafting professional resumes and achieving career success. We understand the importance of a well-crafted resume in today's competitive job market.
        </p>
        <p>
         At [Resume Builder], we are passionate about helping individuals like you create resumes that stand out and showcase your unique skills and experiences. Our easy-to-use resume builder tool empowers you to create a polished and professional resume tailored to your career goals.
        </p>
        <p>
          Our mission is to provide you with the tools and resources you need to land your dream job. We believe that everyone deserves a chance to shine in their career, and a great resume is the first step toward that goal.
        </p>
        <h3>Our Team</h3>
        <p>
          Our dedicated team of experts is here to support you on your career journey. We have a diverse group of professionals, including resume writers, career counselors, and technology enthusiasts, all working together to make your resume-building experience exceptional.
        </p>
        <p>
          We are committed to staying up-to-date with industry trends and continually improving our service to ensure that you receive the best assistance possible.
        </p>
        <h3>Contact Us</h3>
        <p>
          Have questions or feedback? We'd love to hear from you. Feel free to reach out to us at [Resume Builder]. Your input is valuable to us as we strive to provide you with an outstanding resume-building experience.
        </p>
      </div>
    </div>
      <div>
        <Footer/>
      </div>
      </>
  );
}

export default Aboutus;
