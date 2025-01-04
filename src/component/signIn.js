import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() && password.trim()) {
      alert(`Welcome, ${email}!`);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="background">
      <div className="sign-in-card">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>
        <p>
          Lost your password? <Link className="link" to="/lost-password">Click Here</Link>
        </p>
        <p>
          Don't have an account? <Link className="link" to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
