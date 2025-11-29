import { useState } from 'react'
import './App.css'




function App() {

  const [color, setColor]=useState();

  const colors=['blue','red','white','yellow','green','black'];

  function clickHandler(){
    let index=Math.floor(Math.random() * colors.length )
    setColor(colors[index]);
  }

  return (
    <div className='container'>
      <div className='box' style={{background:color}}></div>
      <button className='btn' onClick={clickHandler}>Change the Color</button>
    </div>
  )
}

export default App
