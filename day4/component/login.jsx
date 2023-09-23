import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../asserts/css/login.css';
import { useDispatch } from 'react-redux';
import { Login } from '../component/redux/UserSlice';
import Popup from './PopUp/popup';

export default function Login () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [message, setMessage] = useState({
    type: '',
    content: '',
    url: '',
    btn: ''
  });

  const showMessage = (type,content,url = '',btn = 'Got it') => {
    setMessage({ type, content, url, btn });
    setPopupVisible(true);
  };

  const handleGotItClick = () => {
    if (message.url) {
      navigate(message.url);
    }
    setPopupVisible(false);
  };

  const submitLoginForm = (e) => {
    e.preventDefault();
    const formValues = Object.values(formData);
    if(!formValues.some((value) => !value)) {
      showMessage('success', 'Login successful!', '/home');
      dispatch(login({ username: formData.userName}));
    }
    else
    {
      showMessage('error','Please fill in all fields');
    }
  }


  function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/dashboard");
  };
 }  

  return (
    <div className="container1">

      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
       <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
      <div>
        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
      </div>
    </div>
  );
};
