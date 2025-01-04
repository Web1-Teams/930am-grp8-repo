import React from "react";

const StarRating = ({ rating, reviews, onRate, userRated }) => {
  const handleRatingClick = (value) => {
    if (userRated) {
      alert("You've already rated this product!");
      return;
    }
    onRate(value);
  };

  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "star active" : "star"}
          onClick={() => handleRatingClick(index + 1)}
        >
          ⭐
        </span>
      ))}
      <span>({rating}.0, {reviews} Reviews)</span>
    </div>
  );
};

export default StarRating;
