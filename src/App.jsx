import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data.jsx";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours= tours.filter((tours) => tours.id !== id);
    setTours(newTours); 
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="refresh-button" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  

  return (
    <div className="App">

      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
