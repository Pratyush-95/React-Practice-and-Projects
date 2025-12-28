import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {apiUrl,filterData} from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Card from './components/Card';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';




function App () {
   
   const [courses ,setCourses]=useState(null);
   const [loading, setLoading] = useState(true);
   const [category, setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try{
    let response=await fetch(apiUrl);
    let output=await response.json()
    // output
    setCourses(output.data);
  }
  catch(error){
    toast.error("Network me koi dikkat hai");
  }
  setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[])


    return (
      <div className="app-root">
        <div className="app-container">
          <Navbar/>

          <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
          />

          <div className="content-area">
           { loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) }
          </div>
        </div>
      </div>

    )
}

export default App
