import { useState, useEffect } from 'react';

const useProductFilter = (initialProducts) => {
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [productsData, setProductsData] = useState(initialProducts);


    useEffect(() => {
        setFilteredProducts(initialProducts);
        setProductsData(initialProducts)
    }, [initialProducts]);

    const applyFilter = ({ name, category, maxPrice, minPrice }) => {
        let filtered = productsData;
    
        if (name) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(name.toLowerCase())
            );
        }
    
        if (category && category !== 'all') {
            filtered = filtered.filter((product) => product.category.toLowerCase() === category.toLowerCase());
        }
    
        if (maxPrice) {
            filtered = filtered.filter((product) => product.price <= maxPrice);
        }
    
        if (minPrice) {
            filtered = filtered.filter((product) => product.price >= minPrice);
        }
    
        setFilteredProducts(filtered);
    };

    const clearFilters = () => {
        setFilteredProducts(productsData); 
    };

    return { filteredProducts, applyFilter, clearFilters, setProductsData };
};

export default useProductFilter;