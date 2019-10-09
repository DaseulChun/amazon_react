import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductShowPage from './components/ProductShowPage';
import ProductIndex from './components/ProductIndex';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="ui container">
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
