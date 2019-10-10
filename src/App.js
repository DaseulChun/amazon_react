import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductShowPage from './components/ProductShowPage';
import ProductIndex from './components/ProductIndex';
import Navbar from "./components/Navbar";
import { Session, User } from "./requests";
import './App.css';
import SignInPage from './components/SignInPage';
import Spinner from "./components/Spinner";

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
            <Route path="/products/:id" exact component={ProductShowPage} />
            <Route 
              path="/sign_in" 
              render={routeProps => (
                <SignInPage onSignIn={this.getUser} {...routeProps} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }  
}
    

export default App;
