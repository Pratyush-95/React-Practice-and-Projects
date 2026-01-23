import React, { useState } from 'react'

const Random = () => {

    const [gif, setGif] = useState('');

    function clickHandler(){

    }

  return (
    <div className='w-full h-[250px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold'>ARandom GIF</h1>
      <img src={gif} width="450"/>

      <button onClick={clickHandler} 
      className='w-9/12 bg-white opacity-60 text-lg py-2 rounded-lg'>
        Generate</button>
    </div>
  )
}

export default Random
