import React from 'react';
import './Controls.css';

export const Controls = ({ onSort, onHideSold, onToggleView, isListView }) => (
    <div className="controls">
      <div className="controls-section">
        <select onChange={(e) => onSort(e.target.value)}>
          <option value="" disabled>اختر الترتيب</option>
          <option value="highest-price">الأعلى سعراً</option>
          <option value="lowest-price">الأقل سعراً</option>
          <option value="name">الاسم أبجدياً</option>
          <option value="discount">الأكثر خصماً</option>
        </select>
        <label>
          <input
            type="checkbox"
            defaultChecked
            onChange={(e) => onHideSold(e.target.checked)}
          />
          إخفاء المنتجات المباعة
        </label>
      </div>
      <button className="view-toggle" onClick={onToggleView}>
        {isListView ? 'عرض كشبكة' : 'عرض كقائمة'}
      </button>
    </div>
  );
export default Controls;