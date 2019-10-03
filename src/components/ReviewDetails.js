import React from "react";

//ReviewList component
function ReviewDetails(props){
  console.log(props);
    return (
      <div className="ui segment ReviewDetails">
        <div className="ui header">Review Details</div>
          <p>Rating: {props.rating}</p>
          <p>{props.body}</p>
          <p>
            <small>By:{props.reviewer_fullname} - Created at:{props.created_at.toLocaleDateString()}</small>
          </p> 
      </div>
    )
}

export default ReviewDetails;