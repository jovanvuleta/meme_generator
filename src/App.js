import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";

function App() {
  return (
      <div>
        <Header/>
        <MemeGenerator/>
      </div>
  );
}

export default App;
