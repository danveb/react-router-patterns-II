import React, { useState } from 'react' 
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import './static/styles/App.css';

function App() {

  // initialize State 
  const [colors, setColors] = useState([])

  // addColor() 
  const addColor = (color) => {
    setColors(colors => [color, ...colors]) 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
          <Routes colors={colors} addColor={addColor}/>
      </BrowserRouter>
    </div>
  );
}

export default App;