import React, { useState, useEffect } from 'react';

interface StarRatingProps {
  maxRating: number;
  onRatingChange: (rating: number) => void;
  // add others here like types of stars, color, etc.
}

// pass these down as a prop or import them from a shared file location
const ratingValues = [
  { label: 'Very Dissatisfied', value: 1, color: 'red' },
  { label: 'Dissatisfied', value: 2, color: 'orange' },
  { label: 'Neutral', value: 3, color: 'yellow' },
  { label: 'Satisfied', value: 4, color: 'lightgreen' },
  { label: 'Very Satisfied', value: 5, color: 'green' },
];

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(-1);
  
  // assumes linear scale from 1 to n
  const startValue = ratingValues[0].value;
  const endValue = ratingValues[ratingValues.length - 1].value;

  useEffect(() => {
    onRatingChange(rating);
  }, [rating, onRatingChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  return (
    <div style={{ width: 200, margin: 'auto' }}>
      <input
        type="range"
        id="starRating"
        name="starRating"
        min={startValue}
        max={endValue}
        value={rating}
        onChange={handleChange}
        list="starRatingList"
      />
      <datalist id="starRatingList">
        {ratingValues.map((ratingValue) => (
          <option key={ratingValue.value} value={ratingValue.value} label={ratingValue.label} style={{ color: ratingValue.color }}>
            {ratingValue.label}
          </option>
        ))}
        
        {/* OR hardcoded 1 to n {[...Array(maxRating + 1)].map((_, index) => (
          <option key={index} value={index} label={`${index} star${index !== 1 ? 's' : ''}`}>
            {index}
          </option>
        ))} */}
      </datalist>
      <div aria-live="polite" aria-atomic="true">
        {rating !== -1 && `${rating} ${ratingValues.find((value) => value.value === rating)?.label}`}
      </div>
    </div>
  );
};

export default StarRating;