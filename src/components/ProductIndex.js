import React, { Component } from 'react';
import products from '../data/products';
import ProductForm from "./ProductForm";
import { Product } from '../requests';

class ProductIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [ ...products ]
    }
    this.createProduct = this.createProduct.bind(this);
  }
  deleteProduct(id) {
    this.setState((state, props) => {
      return {
        products: state.products.filter((p) => p.id !== id)
      }
    })
  }
  createProduct(params) {
    Product.create(params).then(product => {
      Product.one(product.id).then(product => {
        this.setState(state => {
          return {
            products: [
              {
                ...product,
                ...state.products
              }
            ]
          }
        })
      })
    })
  }
  render() {
    return (
      <main className="ProductIndex">
        <h1>Products Index</h1>
        <ProductForm onCreateProduct={this.createProduct} />
        <ul>
          {this.state.products.map((product, index) => (
            <li key={index}>
              <p style={{ padding: "1em"}}>
                {product.title} | ${product.price}.00
                <button
                  className="ui right floated red button"
                  onClick={() => this.deleteProduct(product.id)}>
                  Delete
                </button>
              </p>
            </li>
          ))}
        </ul>
      </main>
    )
  }
}

export default ProductIndex;