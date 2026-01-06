import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[color, setColor]=useState("");

  function changeColor(){
    const colors=["red", "blue", "green" , "yellow", "orange"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomIndex];
    setColor(randomColor)
  }

  return (
    <div className='container'>
      <div 
        className="box"
        style={{
          backgroundColor: color
      }}
    ></div>

      <button onClick={changeColor}>Change Box Color</button>
    </div>
  )
}

export default App
