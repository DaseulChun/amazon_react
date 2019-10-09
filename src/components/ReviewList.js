import React from "react";
import ReviewDetails from "./ReviewDetails";

function ReviewList(props){
  // console.log(props);
  return (
      <ul>
        {props.reviews.map(review => (
            <li className="ui segment" key={review.id}>
              <ReviewDetails 
                id={review.id}
                rating={review.rating}
                body={review.body}
                reviewer_fullname={`${review.user.first_name} ${review.user.last_name}`}
                created_at={new Date(review.created_at)}
                onDeleteClick={props.onReviewDelete}
              />
            </li>
        ))}
      </ul>
  )
}

export default ReviewList;