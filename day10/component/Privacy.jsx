import React from 'react';
import "../../src/asserts/css/Privacy.css";
import Footer from '../Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>

      <p>
        At [Your Resume Builder Website], we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
      </p>

      <h2>Information We Collect</h2>

      <p>
        When you use [Your Resume Builder Website], we may collect the following types of information:
      </p>

      <p>
        <li>Personal Information: This includes your name, email address, and any other information you provide when using our services.</li>
        <li>Resume Data: Information you input into our resume builder, such as your education, work experience, skills, and any other relevant details.</li>
        <li>Usage Information: We collect data about your interactions with our website, including your IP address, browser type, and the pages you visit.</li>
        <li>Cookies: We may use cookies and similar tracking technologies to enhance your experience on our website.</li>
      </p>

      <h2>How We Use Your Information</h2>

      <p>
        We use the information we collect for various purposes, including but not limited to:
      </p>

      <p>
        <li>Providing and improving our resume building services.</li>
        <li>Communicating with you about updates, features, and promotions.</li>
        <li>Understanding how you use our website to enhance user experience.</li>
        <li>Protecting the security and integrity of our website.</li>
      </p>

      <h2>Security</h2>

      <p>
        We take data security seriously and implement appropriate measures to protect your personal information. However, no method of data transmission or storage is entirely secure, and we cannot guarantee the absolute security of your data.
      </p>

      <h2>Third-Party Services</h2>

      <p>
        [Your Resume Builder Website] may use third-party services and tools to enhance our services. These third parties may have their own privacy policies, and we encourage you to review them.
      </p>

      <h2>Changes to This Policy</h2>

      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes via email or by prominently posting a notice on our website.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or concerns about our Privacy Policy or the way we handle your personal information, please contact us at [Your Contact Information].
      </p>

      <p>
        This Privacy Policy was last updated on [Date].
      </p>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
};

export default PrivacyPolicy;
