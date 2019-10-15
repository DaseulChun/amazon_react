import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductShowPage from './components/ProductShowPage';
import ProductIndex from './components/ProductIndex';
import ProductNewPage from './components/ProductNewPage';
import Navbar from "./components/Navbar";
import { Session, User } from "./requests";
import './App.css';
import SignInPage from './components/SignInPage';
import Spinner from "./components/Spinner";
import AuthRoute from "./components/AuthRoute";
import { SignUpPage } from "./components/SignUpPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : null,
      loading: true
    };
  }
  getUser = () => {
    User.current() 
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  signOut = () => {
    Session.destroy().then(() => {
      this.setState({
        currentUser: null
      });
    });
  };
  componentDidMount() {
    // Session.create({
    //   email: "hano@codecore.com",
    //   password: "supersecret"
    // }).then(user => {
    //   this.setState({
    //     currentUser: user
    //   });
    // });
    this.getUser();
  }
  render(){
    const { loading, currentUser } = this.state;
  
    if (loading) {
      return <Spinner />;
    }
    return (
      <Router>
        <div className="ui container">
          <Navbar currentUser={currentUser} onSignOut={this.signOut} />
          <Switch>
            <Route path="/" exact component={ProductIndex} />
            <Route path="/products" exact component={ProductIndex} />
            <AuthRoute 
              isAuthenticated={currentUser}
              path="/products/new" 
              component={ProductNewPage} 
            />
            <Route 
              path="/products/:id" 
              render={routeProps => (
                <ProductShowPage {...routeProps}
                currentUser={this.state.currentUser} />
              )}
            />
            <Route 
              path="/sign_in" 
              render={routeProps => (
                <SignInPage onSignIn={this.getUser} {...routeProps} />
              )}
            />
            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }  
}
    

export default App;
