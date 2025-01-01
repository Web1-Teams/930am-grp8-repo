import React, { useEffect } from 'react';
import './Notification.css';
const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000); // Auto-close after 2 seconds
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [message, onClose]);

  return (
    <div className="notification-container fixed bottom-5 right-5 w-72 p-4 rounded-lg shadow-lg bg-black text-white z-50">
      <div className="notification-content">
        <span>{message}</span>
      </div>
      <button 
        className="close-notification bg-transparent border-0 text-white text-xl"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
