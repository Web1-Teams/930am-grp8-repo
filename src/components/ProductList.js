import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useProductFilter from "../hooks/useProductFilter";
import Filter from "./Filter";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { filteredProducts, applyFilter, clearFilters, setProductsData } = useProductFilter(products);


    useEffect(() => {
        fetch("/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("فشل تحميل بيانات المنتجات");
                }
                return response.json();
            })
            .then((data) => {

                setProducts(data);
                setProductsData(data);
            })
            .catch((error) => console.error("خطأ في تحميل المنتجات:", error));
    }, [setProductsData]);

    return (
        <div className="product-list-container">
            <div className="filter-wrapper">
            <Filter applyFilter={applyFilter} clearFilters={clearFilters} />
            </div>
            <div className="products-container">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;