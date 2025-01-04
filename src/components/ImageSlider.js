import React, { useState } from 'react';
import '../styles/ImageSlider.css'; 
import samsungWatch from '../Assets/images/samsung watch.png';
import jbl from '../Assets/images/jbl.png';
import powerbank from '../Assets/images/powerbank.png';

const ImageSlider = () => {
    const images = [
        {
            id: 1,
            src: samsungWatch,
            alt: 'Samsung Watch',
            buttonClass: 'buy-now-button-b1'
        },
        {
            id: 2,
            src: jbl,
            alt: 'JBL Speaker',
             buttonClass: 'buy-now-button-b2'
        },
        {
            id: 3,
            src: powerbank,
            alt: 'Powerbank',
             buttonClass: 'buy-now-button-b3'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    };

    return (
        <div className="image-slider-container" onClick={handleImageClick}>
            <div
                className="image-wrapper"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 1s ease-in-out' 
                }}
            >
                {images.map((image) => (
                    <div key={image.id} className="image-box">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="image"
                        />
                        <button className={`buy-now-button ${image.buttonClass}`}>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;