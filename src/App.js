import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  render() { 
    return ( <>
    <NavBar/>
    <main className="container">
      <Counters></Counters></main></> );
  }
}
 
export default App;
