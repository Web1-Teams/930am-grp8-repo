import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item flex justify-between items-center py-2 border-b border-gray-200">
      <div className="cart-item-info">
        <div className="text-sm font-semibold">{item.name}</div>
        <div className="text-xs text-gray-600">₪{item.price}</div>
      </div>
      <button
        className="remove-item text-red-500 text-sm"
        onClick={() => onRemove(item.id)}
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;
