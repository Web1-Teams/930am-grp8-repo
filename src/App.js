import React, { useState, useEffect } from "react";
import ProductHero from "./components/ProductHero";
import ProductFeatures from "./components/ProductFeatures";
import RelatedProducts from "./components/RelatedProducts";
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
      {/* Product Hero Section */}
      <ProductHero
        rating={rating}
        reviews={reviews}
        onRate={handleRatingClick}
        userRated={userRated}
      />

      {/* Features Section */}
      <ProductFeatures />

      {/* Related Products Section */}
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
