import React from 'react';
import './App.css';
import Activities from './components/Activities/Activities';
import Navbar from './components/Header/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Activities></Activities>
    </div>
  );
}

export default App;
