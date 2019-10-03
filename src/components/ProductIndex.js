import React, { Component } from 'react';
import products from '../data/products';

class ProductIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [ ...products ]
    }
  }
  render() {
    return (
      <main className="ProductIndex">
        <h1>Products Index</h1>
        <ul>
          {this.state.products.map((product, index) => (
            <li key={index}>
              <p>
                {product.title}
              </p>
            </li>
          ))}
        </ul>
      </main>
    )
  }
}
export default ProductIndex;