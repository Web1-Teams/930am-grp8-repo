import React from 'react';
import './ProductCard.css';

export const ProductCard = ({ product, isListView }) => {
  const { name, EnglishName, description, oldPrice, newPrice, image, sold } = product;
  const discountPercentage = Math.round(((oldPrice - newPrice) / oldPrice) * 100);

  return (
    <div className={`elemants ${isListView ? 'list-view' : ''}`}>
      <div className="elemants-image-container">
        <div className="image-badges">
          {sold && <div className="sold-badge">تم البيع</div>}
          {discountPercentage > 0 && (
            <div className="discount-badge">-{discountPercentage}%</div>
          )}
        </div>
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <div>
          <span className="Name_in_Arabic">{EnglishName}</span>
          <p className="product-description">{description}</p>
        </div>
        <div className="price-container">
          <del className="old-price">{oldPrice}₪ </del>
          
          <span className="new-price">{newPrice}₪ </span>
        </div>
        <button className="buy-button" disabled={sold}>
          {sold ? 'تم البيع' : 'ADD TO CARD'}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;