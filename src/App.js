import React, { Component } from 'react';

import Header from './Components/Header';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My First React App" />
      </div>
    );
  }
}

export default App;
