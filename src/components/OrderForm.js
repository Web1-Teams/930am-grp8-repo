import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import OrderDetails from './OrderDetails';
import ShippingInfo from './ShippingInfo';
import FeedbackSection from './FeedbackSection';
import './OrderForm.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: 1,
    color: '',
    payment: '',
    address: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="order-form">
      <h1>Order Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <PersonalInfo formData={formData} handleChange={handleChange} />
        <OrderDetails formData={formData} handleChange={handleChange} />
        <ShippingInfo formData={formData} handleChange={handleChange} />
        <FeedbackSection formData={formData} handleChange={handleChange} />
        <button type="submit" className="submit-button">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
