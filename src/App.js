import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [rating, setRating] = useState(4);
  const [reviews, setReviews] = useState(68);
  const [userRated, setUserRated] = useState(false);

  useEffect(() => {
    const hasRated = localStorage.getItem("userRated");
    if (hasRated) {
      setUserRated(true);
    }
  }, []);

  const handleRatingClick = (value) => {
    if (userRated) {
      alert("You've already rated this product!");
      return;
    }

    setRating(value);
    setReviews((prevReviews) => prevReviews + 1);

    localStorage.setItem("userRated", "true");
    setUserRated(true);

    alert(`You rated this product ${value} stars!`);
  };

  return (
    <div className="nzxt-page">
      {/* Hero Section */}
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
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={index < rating ? "star active" : "star"}
                onClick={() => handleRatingClick(index + 1)}
              >
                ⭐
              </span>
            ))}
            <span>({rating}.0, {reviews} Reviews)</span>
          </div>
          <p className="price">90.00 ₪</p>
          <div className="action-buttons">
            <button
              className="add-to-cart"
              data-product-id="1"
              onClick={() => alert("Product added to cart!")}
            >
              Add to Cart
            </button>
            <button
              className="add-to-fav"
              data-product-id="1"
              onClick={() => alert("Product added to favorites!")}
            >
              Add to Favorites ♥
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features">
        <h2>Features</h2>
        <ul>
          <li>Advanced wireless technology for lag-free performance.</li>
          <li>Customizable RGB lighting with multiple profiles.</li>
          <li>Ergonomic design for extended comfort during intense sessions.</li>
          <li>Durable construction to withstand hours of gaming.</li>
        </ul>
      </section>

      {/* Related Products */}
      <section className="related-products">
        <h2>Related Products</h2>
        <div className="related-grid">
          {relatedProducts.map((product) => (
            <div className="related-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price} ₪</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const relatedProducts = [
  {
    id: 1,
    name: "MECHANICAL KEYBOARD MEETION MK600MX RGB",
    price: "120.00",
    image: "https://nabtech.ps/wp-content/uploads/2023/08/MK600MX2.jpg",
  },
  {
    id: 2,
    name: "HEADSET MARVO H8618 WIRED",
    price: "180.00",
    image: "https://nabtech.ps/wp-content/uploads/2024/12/HEADSET-MARVO-H8618-BLACK.jpg",
  },
  {
    id: 3,
    name: "MOUSE GAMING RAZER OROCHI V2 WIRELESS",
    price: "450.00",
    image: "https://nabtech.ps/wp-content/uploads/2022/11/MOUSE-GAMING-RAZER-ORCHI-V2-WIRELESS66.jpg",
  },
  {
    id: 4,
    name: "MONITOR DELL S2721HGF 27INCH 144HZ CURVED",
    price: "350.00",
    image: "https://nabtech.ps/wp-content/uploads/2024/06/Dell-27-144.jpg",
  },
  {
    id: 5,
    name: "CASE XIGMATEK ANUBIS PRO 4FX ARGB",
    price: "500.00",
    image: "https://nabtech.ps/wp-content/uploads/2023/10/ANUBIS.jpg",
  },
];

export default App;
