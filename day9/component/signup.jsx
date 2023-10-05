import React from 'react';
import { Link } from 'react-router-dom';
import '../asserts/css/signup.css';
import re from '../component/lottie/signupjson.json';
import Lottie from 'react-lottie';

function Signup() {
  const defaultOptions =
  {
      loop:true,
      autoplay:true,
      animationData:re,
      rendereSettings:{
        preserveAspectRatio:"xMidYMid slice"
      }
  }
  
  return (
    <div className='lutt'>
    <div className='lotte'>
      <Lottie
      options={defaultOptions}
      height={600}
      width={600}
      />
    </div>
    <div className="container2">
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="form-group">
         <Link to='/login'> <button type="submit" >Submit</button></Link>
        </div>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
    </div>
  );
}

export default Signup;