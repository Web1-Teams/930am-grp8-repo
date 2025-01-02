import React, { useState, useMemo } from 'react';
import  Controls  from './components/Controls/Controls';
import  ProductGrid  from './components/ProductGrid/ProductGrid';
import  products  from './data/products';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('highest-price');
  const [hideSold, setHideSold] = useState(true);
  const [isListView, setIsListView] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(
      (product) =>
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.EnglishName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!hideSold || !product.sold)
    );

    switch (sortBy) {
      case 'highest-price':
        return filtered.sort((a, b) => b.newPrice - a.newPrice);
      case 'lowest-price':
        return filtered.sort((a, b) => a.newPrice - b.newPrice);
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'discount':
        return filtered.sort(
          (a, b) =>
            (b.oldPrice - b.newPrice) / b.oldPrice -
            (a.oldPrice - a.newPrice) / a.oldPrice
        );
      default:
        return filtered;
    }
  }, [searchTerm, sortBy, hideSold]);

  return (
    <div dir="rtl">
      <br />
      <header>
        <h1 className="most_buy">أحدث العروض</h1>
      </header>
      <br />
      <hr />
      <div className="container">
        <Controls
          onSearch={setSearchTerm}
          onSort={setSortBy}
          onHideSold={setHideSold}
          onToggleView={() => setIsListView(!isListView)}
          isListView={isListView}
        />
        <ProductGrid
          products={filteredAndSortedProducts}
          isListView={isListView}
        />
      </div>
    </div>
  );
};

export default App;