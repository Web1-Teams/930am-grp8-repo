import React from 'react';
import ProductCard from './ProductCard';
import './TopSold.css';

const TopSold = () => {
  const products = [
    {
      category: "Monitor",
      name: "MONITOR AOC C27G4ZXE 280HZ 0.3MS",
      oldPrice: "1000₪",
      newPrice: "830₪",
      image: "https://nabtech.ps/wp-content/uploads/2024/11/MONITOR-AOC-C27G4ZXE-280HZ.jpg"
    },
    {
      category: "computers Accessories",
      name: "MECHANICAL KEYBOARD KEMOVE K68SE GAMING WIRED",
      oldPrice: "250₪",
      newPrice: "150₪",
      image: "https://nabtech.ps/wp-content/uploads/2024/11/MECHANICAL-KEYBOARD-KEMOVE-K68SE-GAMING-WIRED.jpg"
    },
    {      
        "name": "CPU INTEL i5 14600K TRAY",     
        "oldPrice": "1200₪",
        "newPrice": "1080₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/10/I5-14600K-TRAY.jpg",
        "category": "computer parts"
    },
    {   
        "name": "CHAIR XTRIKE ME GC-907 RGB",          
        "oldPrice": "850₪",
        "newPrice": "650₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/11/CHAIR-XTRIKE-ME-GC-907-RGB.jpg",    
        "category": "Computer Accessories"
    },
    {     
        "name": "CPU INTEL i7 14700F TRAY",      
        "oldPrice": "1400₪",
        "newPrice": "1300₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/10/I7-14700F-TRAY.jpg",      
        "category": "computer parts"
    },
    {     
        "name": "MONITOR AOC C27G2ZE 240HZ 0.5MS",      
        "oldPrice": "1100₪",
        "newPrice": "950₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/10/MONITOR-AOC-C27G2ZE-240HZ-CURVED.jpg",
        "category": "Monitor"
    },
    {      
        "name": "SSD NVME M.2 XPG S50 CORE 1TB GEN4",
        "oldPrice": "400₪",
        "newPrice": "320₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/09/SSD-NVME-M.2-XPG-S50-CORE-1TB-GEN4.jpg",
        "category": "computer parts"
    },
    {       
        "name": "MOUSE STEEL SERIES PRIME MINI",
        "oldPrice": "320₪",
        "newPrice": "260₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/09/MOUSE-STEELSERIES-PRIME-MINI-WIRED-1.jpg",
        "category": "Computer Accessories"
    },
    {     
        "name": "AIO COOLER THERMALRIGHT FROZEN WARFRAME LCD 240MM ARGB WHITE",
        "oldPrice": "500₪",
        "newPrice": "350₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/09/AIO-COOLER-THERMALRIGHT-FROZEN-WARFRAME-240MM-ARGB-WHITE.jpg",
        "category": "computer parts"
    },
    {
        "name": "HEADSET FANTECH AURORA HG29 7.1 SURROUND",
        "oldPrice": "170₪",
        "newPrice": "120₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/09/HEADSET-FANTECH-HG29-7.1.jpg",
        "category": "Computer Accessories"
    },
    {
        "name": "CASE G.TIGER C708 WHITE FAN X6 ARGB",
        "oldPrice": "600₪",
        "newPrice": "480₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/09/G.TIGER-WHITE.jpg",
        "category": "computer parts"
    },
    {
        "name": "MB GIGABYTE H610M H V3 D4",
        "oldPrice": "370₪",
        "newPrice": "320₪",
        "image": "https://nabtech.ps/wp-content/uploads/2024/09/MB-H610M-H-V3-D4.jpg",
        "category": "computer parts"
    }
];
return (
    <div className="background">
      <header>
        <h1 className="most_buy">الأكثر مبيعًا</h1>
      </header>
      <hr />
      <br />
      <section className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </div>
  );
};
export default TopSold;