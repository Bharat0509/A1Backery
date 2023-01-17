import React, { useState } from 'react'
import Rating from 'react-simple-star-rating'

export default function App() {
  const [rating, setRating] = useState(2) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  return (
    <div className='App'>
      <Rating
        // onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        // fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      />
      {/* Use rating value */}
      {rating}
    </div>
  )
}