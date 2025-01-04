
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                value={query} 
                onChange={handleSearchChange} 
                placeholder="ابحث عن منتج" 
            />
        </div>
    );
};

export default SearchBar;
