import React from "react";

// ReviewList Component
function ReviewList(props) {
  console.log("THIS IS PROPS in ReviewList ==> ", props.myData.reviews.map(r => console.log(r.rating)))
  const allReviews = props.myData.reviews.map(review =>{
    return (
      <div>
      <div>Review List</div><br />
      <p>Rating: {review.rating}</p>
      <p>{review.body}</p>
      <p>
        <small>By: {review.reviewer.full_name} - Created </small>
      </p>
    </div>
    )
  })
  return (
    <div>
      {allReviews}
    </div>
  )


  // const reviews= props.myData.reviews;
  // console.log("reviews:" , reviews);
  // return(
  //   <div>
  //     <div>Review List</div><br />
  //     {/* {reviews.forEach(review => {
  //       <p>{review.rating}</p>
  //     })} */}
  //     {/* <p>{props.body}</p> */}
  //     <p>
  //       {/* <small>By: {props.reviewer.full_name} - Created </small> */}
  //     </p>
  //   </div>
  // )
}

export default ReviewList;