import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="col">
      <div className="product-item">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name} 
        />
        <div className="card-body">
          <p className="category">{product.category}</p>
          <h3>{product.name}</h3>
          <p className="company">{product.company}</p>
          <p className="price">₪{product.price}</p>
        </div>
        <div className="card-footer text-center">
          <button 
            className="add-to-cart"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
