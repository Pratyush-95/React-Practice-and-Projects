import { useState } from 'react'
import './App.css'
import List from './Components/List.jsx'

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <List tasks={tasks} setTasks={setTasks} />
      
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}

    </div>
  )
}

export default App
