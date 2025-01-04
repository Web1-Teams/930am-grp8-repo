import React from 'react';
import './ProductCard.css';

const ProductCard = ({ imgSrc, alt, link, name, price, originalPrice }) => (
  <div className="product-card">
    <a href={link}>
      <img src={imgSrc} alt={alt} />
    </a>
    <a href={link} style={{ textDecoration: 'none', color: '#000000' }}>
      <b>{name}</b>
    </a>
    <p>
      {price} {originalPrice && <span className="original-price">{originalPrice}</span>}
    </p>
    <button>Add to cart</button>
  </div>
);

export default ProductCard;
