import React, { useState } from 'react'
import './NumberGenerator.css'

const NumberGenerator = () => {
  
    const[Number, setNumber] = useState(null);

    function clickHandler(){
        // let num=Math.floor(Math.random() * 10);
        let num = Math.floor(100000 + Math.random() * 900000);
        // console.log(num);
        setNumber(num);
    }


  return (
    <div className='container'>
    <h1>{Number}</h1>
    <button className='button' onClick={clickHandler}>Ganerate Random No</button>
    </div>
  )
}

export default NumberGenerator
