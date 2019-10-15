import React, { Component } from 'react';
import ProductForm from "./ProductForm";
import { Product } from "../requests";

export default class ProductNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: []
    }
  }

  createProduct = params => {
    Product.create(params).then(product => {
      if(product.errors) {
        // deal with validation errors
        this.setState({
          errors: Object.keys(product.errors).map(errorKey => {
            return {
                field: errorKey,
                message: product.errors[errorKey].join(", ")
            };
          })
        });
      } else {
        this.props.history.push(`/products/${product.id}`);
      }
    });
  };

  render() {
    return (
      <main>
        <div className="ui header">Register a Product</div>
        <ProductForm errors={this.state.error} onCreateProduct={this.createProduct} />
      </main>
    );
  }
}