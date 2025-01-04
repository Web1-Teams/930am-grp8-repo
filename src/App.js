import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './component/signIn';
import SignUp from './component/signup';
import LostPassword from './component/lostPassword';
import Footer from './component/footer';
import './component/signin.css';
import './component/signup_style.css';
import './component/lostPasswordStyle.css';
import './component/footerstyle.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/lost-password" element={<LostPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
