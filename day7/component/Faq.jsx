import React, { useState } from 'react';
import "../../src/asserts/css/Faq.css";
import Footer from '../Footer';

const Faq = () => {
  const [showAnswers, setShowAnswers] = useState(Array(10).fill(false)); // Initialize with the number of FAQ items you have

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  const faqItems = [
    {
      question: "What is a resume builder, and why should I use one?",
      answer: "A resume builder is an online tool that helps you create a professional and visually appealing resume without the need for complex design software. It streamlines the resume creation process, making it easier for you to highlight your skills and experiences effectively."
    },
    {
        question: "Is using a resume builder better than creating a resume from scratch?",
        answer: "Using a resume builder offers several advantages. It ensures a clean and consistent format, provides templates for various industries, and guides you through the resume-writing process. It also saves time and effort compared to starting from scratch."
    },
    {
        question: "Do I need to create an account to use your resume builder?",
        answer: "In most cases, you can start building your resume without creating an account. However, we recommend creating an account to save your progress and access your resume from any device."
    },
    {
      question: "How do I get started with the resume builder?",
      answer: "To get started, simply visit our website and click on the 'Get Started' or 'Create Resume' button. You can then follow the step-by-step process to build your resume by entering your information, selecting a template, and customizing it to your preferences."
    },
    {
      question: "Can I edit my resume after I've created it?",
      answer: "Yes, you can edit your resume at any time. If you've created an account, simply log in and access your saved resumes. You can make updates, add new information, or choose a different template."
    },
    {
      question: "Is my personal information secure when using your resume builder?",
      answer: "We take the security of your personal information seriously. Your data is encrypted, and we have security measures in place to protect it. We do not share your information with third parties. You can review our Privacy Policy for more details."
    },
    {
      question: "Is there a cost associated with using your resume builder?",
      answer: "No, our resume builder is completely free to use. You can create, edit, and download your resume without any charges."
    },
    {
      question: "What formats can I download my resume in?",
      answer: "You can download your resume in various formats, including PDF, Word (DOCX), and plain text. Choose the format that best suits your needs when you're ready to download your resume."
    }
    
  ];

  return (
      <>
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions (FAQ)</h1>

      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <div className={`question ${showAnswers[index] ? 'question-open' : ''}`} onClick={() => toggleAnswer(index)}>
            <h2 className="question-text">{item.question}</h2>
            <i className={`fas ${showAnswers[index] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          {showAnswers[index] && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    <div className='sed'>

    <Footer/>
    </div>
    </>
  );
};

export default Faq;
