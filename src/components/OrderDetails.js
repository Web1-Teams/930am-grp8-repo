import React from 'react';

const OrderDetails = ({ formData, handleChange }) => (
  <div className="order-details">
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
  </div>
);

export default OrderDetails;