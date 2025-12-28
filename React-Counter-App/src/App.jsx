import { useState } from "react";
import "./App.css";

function App() {

  const[count,setCount]=useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="container">
      <div className="head">Increment & Decrement</div>
      <div className="counterbox">
        <button onClick={decreaseHandler} className="decreasebutton">
          -
        </button>

        <div className="countdisplay">
          {count}
        </div>

        <button onClick={increaseHandler} className="increasebutton">
          +
        </button>

      </div>

      <button onClick={resetHandler} className="resetbutton">
        Reset
      </button>

    </div>
  );
}

export default App;