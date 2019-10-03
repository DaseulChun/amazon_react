import React from 'react';
import ProductShowPage from './components/ProductShowPage';
import ProductIndex from './components/ProductIndex';
import './App.css';

function App() {
  return (
    <div className="ui container">
      <ProductIndex />
      <ProductShowPage />
    </div>
  );
}

export default App;
