import React from 'react'

export default function Review(props) {
  return (
    <div>
      {props.reviews && 
        props.reviews.map(review => (
          <div key={review.id}>
            <h3>{review.title}</h3>
            <h4>Author: {review.user.username}</h4>
            <p>{review.description}</p>

            {
              props.currentUser?.id === review.user_id ?
                <>
                  <button>Edit</button>
                  <button onClick={() => props.handleReviewDelete(review.id)}>
                    Delete
                  </button>
                </>
                :
                null
            }
          </div>
        ))
      }
    </div>
  )
}