import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductGrid.css';

export const ProductGrid = ({ products, isListView }) => (
  <div className={`product-grid ${isListView ? 'product-list-view' : ''}`}>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        isListView={isListView}
      />
    ))}
  </div>
);
export default ProductGrid;