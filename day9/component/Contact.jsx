import React from 'react';
import "../../src/asserts/css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us:</p>
      
      {/* Contact Information */}
      <div className="contact-info">
        <p>Email: contact@example.com</p>
        <p>Phone: 9876543210</p>
        <p>Address: 123 Happy Street, Tirupur, India</p>
      </div>

      {/* Social Media Links */}
      <div className="social-media-links">
        <h2>Connect with Us on Social Media</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
