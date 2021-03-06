import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
// import singleProduct from '../data/singleProduct';
import Spinner from './Spinner';
import { Product } from '../requests';

// Product Show Component
class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      isLoading: true
    }
    this.deleteReview = this.deleteReview.bind(this);
  }

  componentDidMount() {
    // Currently hard-coded the productId
    // Product.one(450).then((product) => {
    //   this.setState({
    //     product: product,
    //     isLoading: false
    //   });
    // });
    // console.log('this.props.history before match>>>>', this.props.histroy);
    Product.one(this.props.match.params.id).then(product => {
      this.setState({
        product: product,
        isLoading: false
      });
    });
  }
  deleteReview(reviewId) {
    // console.log('this ', this);
    this.setState((state) => {
      return {
        product: {
          ...state.product,
          reviews: state.product.reviews.filter((review) => review.id !== reviewId)
        }
      }
    })
  }
  deleteProduct() {
    Product.delete(this.state.product.id).then(data => {
      this.props.history.push("/products");
    });
  }
  render() {
    if (!this.state.product) {
      return <Spinner />;
    }
    const { id: currentUser } = this.props.currentUser;
    // const currentUser = this.props.currentUser.id ?
    const { id: seller } = this.state.product.seller;
    return (
      <div>
        <h1>Product Show Page</h1>
        <ProductDetails {...this.state.product} /> <br />
        {currentUser === seller && (
          <button className="ui right floated red button" onClick={() => this.deleteProduct()}>
            Delete
          </button>
        )}

        <ReviewList onReviewDelete={this.deleteReview} reviews={this.state.product.reviews} />
        {/* {console.log(this.state.product)} */}
      </div>
    )
  }
}

export default ProductShowPage;