import React from "react";

// View Product Component
function ProductDetails(props) {
  // console.log("This is props in ProductDetails ==>", props)
  // console.log("THIS IS My DATA in ProductDetails ==>", props.myData)
  return(
    <div>
      <h2>{props.myData.title}</h2>
      <p>{props.myData.description}</p>
      <p>${props.myData.price}.00</p>
      <p>
        <small>By {props.myData.seller.full_name} - Created at {props.myData.created_at}</small>
      </p>
    </div>
  );
}

export default ProductDetails;