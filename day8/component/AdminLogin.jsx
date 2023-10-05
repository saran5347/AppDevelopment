import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../src/asserts/css/Adminlogin.css';
import { useDispatch } from 'react-redux';
import { login } from '../component/redux/UserSlice';
import Popup from './PopUp/popup';
import re from '../component/lottie/login.json';
import Lottie from 'react-lottie';
export default function Adminlogin () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const defaultOptions =
  {
      loop:true,
      autoplay:true,
      animationData:re,
      rendereSettings:{
        preserveAspectRatio:"xMidYMid slice"
      }
  }
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
      showMessage('success', 'Login successful!', '/dashboard');
      dispatch(login(formData.username));
    }
    else
    {
      showMessage('error','Please fill in all fields');
    }
  }
  return (
    <div className='lutt'>
      <div className='lotte'>
        <Lottie
        options={defaultOptions}
        height={500}
        width={600}
        />
      </div>

    <div className="c1">

      <h1>Login</h1>
      <form onSubmit={submitLoginForm}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username:e.target.value})}
            required
            />
        </div>
        <div className="f1">
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password:e.target.value})}
            required
            />
        </div>
        
        <div className="f2">
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
      </div>
    </div>
            </div>
  );
};
