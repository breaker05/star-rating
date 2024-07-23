import React, { useState, useEffect } from 'react';

interface StarRatingProps {
  maxRating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ maxRating, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
    onRatingChange(rating);
  }, [rating, onRatingChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  return (
    <div>
      <label htmlFor="starRating">Rate:</label>
      <input
        type="range"
        id="starRating"
        name="starRating"
        min="0"
        max={maxRating}
        value={rating}
        onChange={handleChange}
        list="starRatingList"
      />
      <datalist id="starRatingList">
        {[...Array(maxRating + 1)].map((_, index) => (
          <option key={index} value={index} label={`${index} star${index !== 1 ? 's' : ''}`}>
            {index}
          </option>
        ))}
      </datalist>
      <div aria-live="polite" aria-atomic="true">
        {`${rating} star${rating !== 1 ? 's' : ''}`}
      </div>
    </div>
  );
};

export default StarRating;