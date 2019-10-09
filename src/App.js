import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductShowPage from './components/ProductShowPage';
import ProductIndex from './components/ProductIndex';
import Navbar from "./components/Navbar";
import { Session } from "./requests";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : null
    };
  }
  componentDidMount() {
    Session.create({
      email: "hano@codecore.com",
      password: "supersecret"
    }).then(user => {
      this.setState({
        currentUser: user
      });
    });
  }
  render(){
    return (
      <Router>
        <div className="ui container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={ProductIndex} />
            <Route path="/products" exact component={ProductIndex} />
            <Route path="/products/:id" exact component={ProductShowPage} />
          </Switch>
        </div>
      </Router>
    );
  }  
}
    

export default App;
