import React, { useState } from 'react';
import './App.css';

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
    <div style={{ margin: '20px', backgroundColor: '#121212', color: '#ffffff', fontFamily: 'Cairo, sans-serif' }}>
      <h1>Order Survey Form</h1>
      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #333',
        borderRadius: '8px',
        backgroundColor: '#1e1e1e'
      }}>
        {/* Personal Information */}
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

        {/* Order Details */}
        <label htmlFor="product">Product Name</label>
        <input
          type="text"
          id="product"
          name="product"
          placeholder="Enter the product name"
          value={formData.product}
          onChange={handleChange}
          required
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          placeholder="Enter the quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <label htmlFor="color">Color (Optional)</label>
        <input
          type="text"
          id="color"
          name="color"
          placeholder="Enter the color (if any)"
          value={formData.color}
          onChange={handleChange}
        />

        
        {/* Shipping Information */}
        <label htmlFor="address">Delivery Address</label>
        <textarea
          id="address"
          name="address"
          rows="4"
          placeholder="Enter the delivery address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        {/* Service Improvement */}
        <label htmlFor="feedback">How can we improve our services?</label>
        <textarea
          id="feedback"
          name="feedback"
          rows="4"
          placeholder="Enter your feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}>Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
