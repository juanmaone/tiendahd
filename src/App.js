import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js'

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TIENDA HD
        </p>    
      </header>
    </div>
  );
}

export default App;
