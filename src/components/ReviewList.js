import React from "react";
import ReviewDetails from "./ReviewDetails";

function ReviewList(props){
  return (
      <ul>
        {props.myData.reviews.map(review => (
            <li className="ui segment" key={review.id}>
              <ReviewDetails 
                rating={review.rating}
                body={review.body}
                reviewer_fullname={review.reviewer.full_name}
                created_at={new Date(review.created_at)}
              />
            </li>
        ))}
      </ul>
  )
}

export default ReviewList;