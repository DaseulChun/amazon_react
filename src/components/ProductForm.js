import React from "react";

function ProductForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    const newProduct = {
      title: formData.get("title"),
      body: formData.get("description"),
      price: formData.get("price")
    };

    props.onCreateProduct(newProduct);
    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Please Enter Title"
        />
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Please Enter description"
          rows="2"
        />
      </div>
      <div className="field">
        <label htmlFor ="price">Price</label>
        <input 
          type="number" 
          name="price" 
          id="price" 
          placeholder="Price" 
        />
        </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
