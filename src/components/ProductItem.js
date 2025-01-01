import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item p-4 bg-white rounded-lg shadow-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-yellow-400 font-bold mt-2">₪{product.price}</p>
      <button
        className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
