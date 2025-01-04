import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

const products = [
  {
    imgSrc: 'https://nabtech.ps/wp-content/uploads/2024/09/MOUSE-STEELSERIES-PRIME-MINI-WIRED-1.jpg',
    alt: 'MOUSE',
    link: 'https://www.smth.com',
    name: 'MOUSE STEEL SERIES PRIME MINI',
    price: '260.00 ₪',
    originalPrice: '320.00 ₪',
  },
  {
    imgSrc: 'https://nabtech.ps/wp-content/uploads/2023/08/MK600MX2.jpg',
    alt: 'GamingKeyboard',
    link: 'https://www.smth.com',
    name: 'MEETION MK600MX RGB RAINBOW',
    price: '120.00 ₪',
    originalPrice: '160.00 ₪',
  },
  {
    imgSrc: 'https://nabtech.ps/wp-content/uploads/2023/09/TABLE-R.jpg',
    alt: 'Table',
    link: 'https://www.smth.com',
    name: 'TABLE GAMING RGB BLACK AND RED 1.4M',
    price: '450.00 ₪',
    originalPrice: '',
  },
  {
    imgSrc: 'https://nabtech.ps/wp-content/uploads/2024/05/SSEASONIC-S400.jpg',
    alt: 'CPUCOOLER',
    link: 'https://www.smth.com',
    name: 'CPU COOLER SEASONIC S400 RAINBOW RGB',
    price: '100.00 ₪',
    originalPrice: '150.00 ₪',
  },
  {
    imgSrc: 'https://nabtech.ps/wp-content/uploads/2022/10/CPU-INTEL-i5-12400F-TRAY.jpg',
    alt: 'CPU',
    link: 'https://www.smth.com',
    name: 'CPU INTEL i5 12400F TRAY',
    price: '200.00 ₪',
    originalPrice: '260.00 ₪',
  },
  {
    imgSrc: 'https://nabtech.ps/wp-content/uploads/2024/04/H610-ARKTEK.jpg',
    alt: 'MotherBoard',
    link: 'https://www.smth.com',
    name: 'MB ARKTEK H610M EG ALPHA FORCE D4',
    price: '320.00 ₪',
    originalPrice: '350.00 ₪',
  },
];

const ProductsSection = () => (
  <section className="products-section">
    <h1>منتجات مختارة :</h1>
    <hr />
    <div className="products-scroll-container">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    <hr />
  </section>
);

export default ProductsSection;
