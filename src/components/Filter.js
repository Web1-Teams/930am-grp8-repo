import React, { useState } from 'react';

const Filter = ({ applyFilter, clearFilters }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('all');
    const [maxPrice, setMaxPrice] = useState('');
    const [minPrice, setMinPrice] = useState('');

    const handleFilter = () => {
        const filters = {
            name: name.trim(),
            maxPrice: maxPrice ? parseFloat(maxPrice) : '',
            minPrice: minPrice ? parseFloat(minPrice) : ''
        };
   
        if (applyFilter) {
            console.log("Applying filter with values: ", filters);  // تحقق من الفلاتر
            applyFilter(filters); // تطبيق الفلاتر
        }
    };
   

    const handleClear = () => {
        setName('');
        setColor('all');
        setMaxPrice('');
        setMinPrice('');
        if (clearFilters) {
            clearFilters();
            console.log("Clearing filters");
        } else {
            console.error('clearFilters is not a function');
        }
    };

    return (
        <div className="filter-section">
            <input
                type="text"
                id="search-bar"
                placeholder="Search"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="filter-input"
            />
            <select
                id="color-filter"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="filter-input"
            >
                <option value="all">All Colors</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="gray">Gray</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            <input
                type="number"
                id="max-price"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="filter-input"
            />
            <input
                type="number"
                id="min-price"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="filter-input"
            />
            <button onClick={handleFilter} className="filter-btn">
                Filter
            </button>
            <button onClick={handleClear} className="filter-btn">
                Clear
            </button>
        </div>
    );
};

export default Filter;
