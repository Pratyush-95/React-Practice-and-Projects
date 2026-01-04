import React from 'react'
import { useState } from 'react'

const List = ({tasks, setTasks}) => {

  const [inputText, setInputText] = useState("");


  const addTask =(event) =>{
    event.preventDefault();
    // console.log("Task added",inputText);
    if(inputText.trim()===""){
      alert("Please enter a task");
      return;
    }

    setTasks([...tasks, inputText]);

    setInputText("");
  }

  
 

  return (
    <div className='container'>
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <div>
            <input type="text" placeholder="Add a new task" value={inputText}  
            onChange={(event) => setInputText(event.target.value)}/>

            <button className='add'>Add</button>
        </div>
      
      </form>
      
    </div>
  )
}

export default List
