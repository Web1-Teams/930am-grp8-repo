import React from 'react';
import CartSummary from './components/CartSummary/CartSummary';
import ShippingForm from './components/ShippingForm/ShippingForm';
import PaymentForm from './components/PaymentForm/PaymentForm';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <CartSummary />
      <div className="forms-container">
        <ShippingForm />
        <PaymentForm />
      </div>
    </div>
  );
};

export default App;
