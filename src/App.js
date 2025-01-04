// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>متجر الكتروني</h1>
                    {/* قائمة التنقل */}
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">الصفحة الرئيسية</Link>
                            </li>
                            <li>
                                <Link to="/products">المنتجات</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
