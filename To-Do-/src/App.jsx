import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App(){

  const[name, setName]=useState("");
  const[display, setDisplay]=useState([]);
  


  function clickHandler(e){

    e.preventDefault();

    if(name.trim() === ""){
      toast.error("Please enter a name before submitting!");
      return;
    }
    setDisplay([...display,name]);
    // console.log(name)
    setName("");
  }

  function deleteHandler(index){
    const update= display.filter((item,i) => i !==index);
    setDisplay(update);
  }

  return(
    <div>
      <form onSubmit={clickHandler}>
        <label>Enter Your Name : </label>
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)}/>

        <button type="submit">Submit</button>
       
         <ul>
          {display.map((item,index) =>{
            return <li key={index}>{item} 
            <button type="button" onClick={() => deleteHandler(index)}>Delete</button></li>
          })}
         </ul>
      </form>

       <ToastContainer />
    </div>
  )
}

export default App;