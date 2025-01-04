import React from 'react';

const ShippingInfo = ({ formData, handleChange }) => (
  <div className="shipping-info">
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
  </div>
);

export default ShippingInfo;
