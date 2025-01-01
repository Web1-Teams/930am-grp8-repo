import React from 'react';
import CartItem from './CartItem';

const Cart = ({ items, total, onRemoveItem, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-5 right-5 w-72 bg-white rounded-lg shadow-lg p-4 text-black z-50">
      <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <span className="text-sm">{items.length} items</span>
      </div>
      
      <div className="max-h-72 overflow-y-auto">
        {items.map((item) => (
          <CartItem key={item.id} item={item} onRemove={onRemoveItem} />
        ))}
      </div>
      
      <div className="mt-4 text-right">
        <div className="mb-2">Total: ₪{total.toFixed(2)}</div>
        <button
          className={`px-4 py-2 rounded-lg ${items.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500'} text-white`}
          disabled={items.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
