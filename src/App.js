// Import React
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet'

// Define a function or a class
function App() {
  return (
    <div>
      <h1>Toasfas</h1>
      <Greet whom="Alice"/>
      <Greet whom="Andy" text="Hello friend"/>
    </div>
  );
}


// Export that function or class
export default App;
