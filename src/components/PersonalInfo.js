import React from 'react';

const PersonalInfo = ({ formData, handleChange }) => (
  <div className="personal-info">
    <label htmlFor="name">Full Name</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter your full name"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={handleChange}
      required
    />

    <label htmlFor="phone">Phone Number</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="Enter your phone number"
      value={formData.phone}
      onChange={handleChange}
      required
    />
  </div>
);

export default PersonalInfo;
