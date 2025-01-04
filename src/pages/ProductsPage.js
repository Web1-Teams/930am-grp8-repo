import React from "react";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import "../styles/App.css"; 
const ProductsPage = () => {
    return (
        <div className="products-page">
            <h1>صفحة المنتجات</h1>
            <ProductList />
        </div>
    );
};

export default ProductsPage;
