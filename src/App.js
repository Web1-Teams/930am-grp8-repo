// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (id) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <div style={styles.appContainer}>
            <Header />
            <ProductGrid addToCart={addToCart} />
            <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
            />
        </div>
    );
};

const styles = {
    appContainer: {
        fontFamily: "Cairo, sans-serif",
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "2rem 0",
    },
};

export default App;
