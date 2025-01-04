import React from 'react';

const FeedbackSection = ({ formData, handleChange }) => (
  <div className="feedback-section">
    <label htmlFor="feedback">How can we improve our services?</label>
    <textarea
      id="feedback"
      name="feedback"
      rows="4"
      placeholder="Enter your feedback"
      value={formData.feedback}
      onChange={handleChange}
    ></textarea>
  </div>
);

export default FeedbackSection;
