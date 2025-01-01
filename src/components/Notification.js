import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-5 right-5 bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-md z-50">
      <p>{message}</p>
      <button onClick={onClose} className="ml-4 text-sm font-semibold">
        ✖
      </button>
    </div>
  );
};

export default Notification;
