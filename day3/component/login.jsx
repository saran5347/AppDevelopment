import React from 'react';
import { Link } from 'react-router-dom';
import '../asserts/css/login.css';
import image from './resumebuilt.jpg';
function Login() {
<img src={image} alt="ResumeBuilt" className="image" />
  return (
    <div className="container1">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;