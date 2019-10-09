import React from "react";

//ReviewList component
function ReviewDetails(props){
    return (
      <div className="ui segment ReviewDetails">
        <div className="ui header">Review Details</div>
          {console.log("PROPS !!!!===> ", props)}
          <p>Rating: {props.rating}</p>
          <p>{props.body}</p>
          <p>
            <small>By:{props.reviewer_fullname} - Created at:{props.created_at.toLocaleDateString()}</small>
          </p> 
          <button className="ui floated red button" onClick={() => props.onDeleteClick(props.id)}>
            Delete
          </button>
      </div>
    )
}

export default ReviewDetails;