import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import singleProduct from '../data/singleProduct';

// Product Show Component
class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { ...singleProduct }
    }
  }
  render() {
    return (
      <div>
        <h1>Product Show Page</h1>
        <ProductDetails {...this.state.product} /> <br />
        <ReviewList reviews={this.state.product.reviews} />
      </div>
    )
  }
}

export default ProductShowPage;