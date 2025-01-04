import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="product">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>السعر: {product.price} $</p>
            {/* {product.color && <p>اللون: {product.color}</p>} */}
            {product.catetory && <p>التصنيف: {product.catetory}</p>}
        </div>
    );
};

export default ProductCard;