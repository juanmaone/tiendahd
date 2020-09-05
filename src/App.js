import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar.js'
import WelcUsr from './components/Home.js'
import ItemCounter from './components/ItemCounter.jsx'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <WelcUsr name="Juan Martín"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><ItemCounter maxValue={10} minValue={0}/></p>
        <p>
          TIENDA HD
        </p>    
      </header>
    </div>
  );
}

export default App;
