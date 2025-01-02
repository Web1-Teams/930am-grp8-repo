import React from 'react';
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => (
  <div className="search-box">
    <input
      type="text"
      placeholder="ابحث عن منتج..."
      onChange={(e) => onSearch(e.target.value)}
    />
    <i>🔍</i>
  </div>
);
export default SearchBar;