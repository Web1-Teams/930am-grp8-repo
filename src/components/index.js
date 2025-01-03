import React from 'react';
import './Catagories.css';

const Categories = () => {
  const categories = [
    { id: 1, name: 'أجهزة الكمبيوتر', image: 'https://watanimall.com/wp-content/uploads/2021/06/case-category.png' },
    { id: 2, name: 'أجهزة اللابتوب', image: 'https://watanimall.com/wp-content/uploads/2021/06/laptop-category.png' },
    { id: 3, name: 'إكسسوارات الكمبيوتر', image: 'https://watanimall.com/wp-content/uploads/2021/06/kbmmp-category.png' },
    { id: 4, name: 'الهواتف والاكسسوارات', image: 'https://gorillagadgets.com/cdn/shop/products/3-in-1-wireless-charging-main-image-1_600x.jpg?v=1649705102' },
    { id: 5, name: 'قطع الكمبيوتر', image: 'https://watanimall.com/wp-content/uploads/2021/06/motherboard-category.png' },
    { id: 6, name: 'أخرى', image: 'https://cdn-icons-png.flaticon.com/512/152/152529.png' }
  ];

  return (
    <section className="categories">
      <h2>فئات المنتجات</h2>
      <hr />
      <div className="category-grid">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} />
            <div className="category-content">
              <h3>{category.name}</h3>
              <button className="btn">المزيد</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
