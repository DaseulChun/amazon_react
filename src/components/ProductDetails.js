import React from "react";

// View Product Component
function ProductDetails(props) {
  // console.log("This is props in ProductDetails ==>", props)
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>${props.price}.00</p>
      <p>
        <small>By {props.seller.full_name} - Created at {props.created_at}</small>
      </p>
    </div>
  );
}

export default ProductDetails;