import React from 'react';

const ProductCard = ({ category, name, oldPrice = null, newPrice, image }) => {
    return (
      <div className="flex">
        <div className="elemants">
          <img src={image} alt={name} />
          <p>
            <span className="N_arb">{category}</span>
            <br />
            <b>{name}</b>
            <br />
            {oldPrice ? (
              <>
                <del className="N_arb">{oldPrice}</del>
                <span className="newP"> {newPrice}</span>
              </>
            ) : (
              <span className="newP">{newPrice}</span>
            )}
          </p>
          <div className="buy">
            <button className="buy"><b>ADD TO CARD</b></button>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard;