import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200">
      <div>
        <h3 className="text-sm font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-600">₪{item.price}</p>
      </div>
      <button
        className="text-red-500 text-sm"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
