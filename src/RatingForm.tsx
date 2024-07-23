import React, { useState } from 'react';
import StarRating from './StarRating';

const RatingForm: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = async (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = async () => {
    console.log('Submit To Server Rating:', rating);

    // additional error handling in here

    const formData = new FormData();
    formData.append('rating', rating.toString());

    try {
      const response = await fetch('/submit-rating', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Rating submitted successfully');
      } else {
        console.error('Error submitting rating');
      }
    } catch (error) {
      console.error('Error submitting rating', error);
    }
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
