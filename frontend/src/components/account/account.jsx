

import React, { useState } from 'react';
import './account.css'; // Make sure your styles are linked here

const account = () => {
  // State to track if the form is in 'login' or 'signup' mode
  const [isLogin, setIsLogin] = useState(true);

  // Toggle form between Login and Signup
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLogin ? 'login' : 'signup'}`}>
          {isLogin ? 'Login Form' : 'Signup Form'}
        </div>
      </div>

      <div className="form-container">
        <div className="slide-controls">
          <label
            className={`slide login ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </label>
          <label
            className={`slide signup ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </label>
          <div className={`slider-tab ${isLogin ? 'login' : 'signup'}`}></div>
        </div>
        <div className="form-inner">
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>

      </div>
    </div>
  );
};

const LoginForm = () => (

  <form className="login">
    
    <div className="field">
      <input type="text" placeholder="Email Address" required />
    </div>
    <div className="field">
      <input type="password" placeholder="Password" required />
    </div>
    <div className="pass-link">
      <a href="#">Forgot password?</a>
    </div>
    <div className="field btn">
      <input type="submit" value="Login" />
    </div>

    <div className="signup-link">
      Not a member?{' '}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('.slide.signup').click(); // Simulates click on signup
        }}
      >
        Signup now
      </a>
    </div>
  </form>
);

const SignupForm = () => (
  <form className="signup">
    <div className="field">
      <input type="text" placeholder="Email Address" required />
    </div>
    <div className="field">
      <input type="password" placeholder="Password" required />
    </div>
    <div className="field">
      <input type="password" placeholder="Confirm password" required />
    </div>
    <div className="field btn">
      <input type="submit" value="Signup" />
    </div>
  </form>
);

export default account;
