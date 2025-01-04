import React from 'react';
import './ShippingForm.css';

const ShippingForm = () => {
  return (
    <div className="shipping-container">
      <h2>Shipping Details</h2>
      <form className="shipping-form">
        <div className="input-group">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" name="full-name" required />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div className="input-group">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" id="postal-code" name="postal-code" required />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" required />
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
