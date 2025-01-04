import React from "react";

const RelatedProducts = ({ products }) => (
  <section className="related-products">
    <h2>Related Products</h2>
    <div className="related-grid">
      {products.map((product) => (
        <div className="related-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">{product.price} ₪</p>
        </div>
      ))}
    </div>
  </section>
);

export default RelatedProducts;
