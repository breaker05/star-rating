import React, { useState } from 'react';
import StarRating from './StarRating';

const RatingForm: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    console.log('Submit To Server Rating:', rating);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StarRating maxRating={5} onRatingChange={handleRatingChange} />
      <input type="hidden" name="rating" value={rating} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RatingForm;
