import React from "react";
import StarRating from "./StarRating";

const ProductHero = ({ rating, reviews, onRate, userRated }) => (
  <section className="product-hero">
    <div className="product-image">
      <img
        src="https://nabtech.ps/wp-content/uploads/2024/11/MOUSE-XTRIKE-ME-GW-611-WIRELESS-268x268.jpg"
        width="400"
        alt="Product"
      />
    </div>
    <div className="product-info">
      <h2>MOUSE XTRIKE ME GW-611 WIRELESS</h2>
      <p className="description">
        Elevate your gaming with precision and style. This ergonomic mouse
        features advanced wireless technology, durable construction, and
        customizable RGB lighting to match your unique setup.
      </p>
      <StarRating
        rating={rating}
        reviews={reviews}
        onRate={onRate}
        userRated={userRated}
      />
      <p className="price">90.00 ₪</p>
      <div className="action-buttons">
        <button
          className="add-to-cart"
          onClick={() => alert("Product added to cart!")}
        >
          Add to Cart
        </button>
        <button
          className="add-to-fav"
          onClick={() => alert("Product added to favorites!")}
        >
          Add to Favorites ♥
        </button>
      </div>
    </div>
  </section>
);

export default ProductHero;
