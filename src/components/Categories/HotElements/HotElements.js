import React from 'react';
import './hotelements.css';

const HotElements = () => {
  const hotItems = [
    {
      id: 1,
      name: 'MOUSE GLORIOUS GAMING MODEL O MATTE BLACK',
      image: 'https://watanimall.com/wp-content/uploads/2021/01/MODEL-O-.png',
      price: 200,
      originalPrice: 260
    },
    {
      id: 2,
      name: 'HEADSET HYPER X CLOUD III SURROUND 7.1 WIRED',
      image: 'https://nabtech.ps/wp-content/uploads/2023/12/HYPER-X-CLOUD-3.jpg',
      price: 355,
      originalPrice: 450
    },
    {
      id: 3,
      name: 'MONITOR LG ULTRAGEAR 24GQ50F-B 24" VA FHD 165HZ',
      image: 'https://watanimall.com/wp-content/uploads/2022/11/MT-LG-24GQ50F-B.png',
      price: 600,
      originalPrice: 780
    }
  ];

  return (
    <section className="hot-elements">
      <h2>لقطة🔥!!</h2>
      <hr />
      <div className="hot-grid">
        {hotItems.map(item => (
          <div key={item.id} className="hot-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              {item.price.toFixed(2)} ₪ 
              <span className="original-price">{item.originalPrice.toFixed(2)} ₪</span>
            </p>
            <button className="buy-now">Add to the cart!</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotElements;