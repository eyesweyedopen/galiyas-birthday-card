import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card content="Happy Birthday Galiya!"/>
      </div>
    );
  }
}

export default App;
