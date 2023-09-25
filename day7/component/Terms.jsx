import React from 'react';
import"../../src/asserts/css/Terms.css";
import Footer from '../Footer';
function TermsAndConditions() {
  return (
    <>
    <div className="terms-and-conditions">
      <h2>Terms and Conditions</h2>
      <p>
        These Terms and Conditions ("Agreement") govern your use of the resume builder service ("Service") provided by [Your Company Name] ("Company," "We," "Us," or "Our"). By using the Service, you agree to comply with and be bound by this Agreement. If you do not agree with these terms, please do not use the Service.
      </p>

      <h3>1. Use of Service</h3>

      <p className="hoverable-section">
        <strong>1.1 Eligibility:</strong>
        <br />
        - You must be at least 18 years old to use the Service.
        <br />
        - You may use the Service for personal and non-commercial purposes only.
      </p>

      <p className="hoverable-section">
        <strong>1.2 Account Creation:</strong>
        <br />
        - You may be required to create an account to access certain features of the Service.
        <br />
        - You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </p>

      <h3>2. Resume Creation</h3>

      <p className="hoverable-section">
        <strong>2.1 Accuracy:</strong>
        <br />
        - You are solely responsible for the accuracy, completeness, and legality of the information included in your resume.
        <br />
        - We do not verify the accuracy of the content you provide.
      </p>

      <h3>3. News Updates</h3>

      <p className="hoverable-section">
        <strong>3.1 Latest News:</strong>
        <br />
        - Stay informed about the latest updates and improvements to our resume builder service by visiting our website or checking our news section regularly.
        <br />
        - We may post news articles, announcements, and service-related updates to keep you informed about our offerings.
      </p>

      <h3>4. Content Updates</h3>

      <p className="hoverable-section">
        <strong>4.1 Service Changes:</strong>
        <br />
        - We reserve the right to update, modify, or discontinue any part of the Service, including features, functionality, or content, at any time without prior notice.
        <br />
        - We will strive to provide you with the best possible user experience and service quality.
      </p>

      <p>
        For questions or concerns regarding these Terms and Conditions, please contact us at [Your Contact Information].
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default TermsAndConditions;
