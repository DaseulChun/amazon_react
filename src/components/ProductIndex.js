import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import products from '../data/products';
import ProductForm from "./ProductForm";
import Spinner from "./Spinner";
import { Product } from '../requests';

class ProductIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    }
    this.createProduct = this.createProduct.bind(this);
  }
  componentDidMount() {
    Product.all().then(products => {
      this.setState({
        products: products,
        isLoading: false
      });
    });
  }
  createProduct(params) {
    // Product.create(params).then(product => {
    //   Product.one(product.id).then(product => {
    //     this.setState(state => {
    //       return {
    //         products: [
    //           {
    //             ...product,
    //             ...state.products
    //           }
    //         ]
    //       }
    //     })
    //   })
    // })
    console.log('this.props before histroy>>>', this.props)
    // debugger;
    Product.create(params).then(product => {
      this.props.history.push(`/products/${product.id}`);
    });
  }
  deleteProduct(id) {
    this.setState((state, props) => {
      return {
        products: state.products.filter((p) => p.id !== id)
      }
    })
  }
  render() {
    if (!this.state.products) {
      return <Spinner />;
    }
    return (
      <main className="ProductIndex">
        <h1>Products Index</h1>
        <ProductForm onCreateProduct={this.createProduct} />
        <ul>
          {this.state.products.map((product, index) => (
            <li key={index}>
              <p style={{ padding: "1em"}}>
                <Link to={`/products/${product.id}`}>{product.title} | ${product.price}.00</Link>
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