import React from 'react';
import './PaymentForm.css';
import productsData from '../../data/products.json';

const PaymentForm = () => {
  const subtotal = productsData.products.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form className="payment-form">
        <div className="input-group">
          <label htmlFor="card-number">Card Number</label>
          <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
          </div>
          <div className="input-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" required />
          </div>
        </div>

        <div className="payment-methods">
          <h3>Payment Method</h3>
          <div className="payment-options">
            <div className="payment-option">
              <input type="radio" id="credit-card" name="payment-method" value="credit-card" />
              <label htmlFor="credit-card">Credit Card</label>
            </div>
            <div className="payment-option">
              <input type="radio" id="paypal" name="payment-method" value="paypal" />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div className="payment-option">
              <input type="radio" id="bank-transfer" name="payment-method" value="bank-transfer" />
              <label htmlFor="bank-transfer">Bank Transfer</label>
            </div>
          </div>
        </div>

        <div className="total">
          <h3>Subtotal: {subtotal} ₪</h3>
          <hr />
          <h3 className="btn">مناطق الضفة - شركة توصيل: ₪ 20</h3>
          <h3 className="btn">مناطق القدس - شركة توصيل: ₪ 30</h3>
          <h3 className="btn">مناطق الداخل - شركة توصيل: ₪ 70</h3>
          <hr />
          <h3>Total: {subtotal + 20} ₪</h3>
        </div>

        <button type="submit" className="submit-btn">Complete Purchase</button>
      </form>
    </div>
  );
};

export default PaymentForm;