"use client";
import React, { useState } from 'react';

const Component_Intraction = () => {
 
   const [counter, setCounter] = useState(0);
   const [change, setChange]=useState(false);
  return (
    <div className='bg-slate-200 w-full h-screen'>
     <h1 className='bg-slate-300 p-5 m-5 w-15 h-100 text-center text-2xl font-bold border-4 border-gray-600 rounded hover:bg-black hover:text-white '> {counter}</h1>
     <div className='flex justify-center  '>
     <button onClick={()=>setCounter(counter+1)} className='bg-slate-300 px-2 py-1 m-5 text-center font-bold border-4 border-gray-600 rounded hover:bg-green-500 hover:text-white ' >Add </button>
     <button onClick={()=>setCounter(counter-1)} className='bg-slate-300 px-2 py-1 m-5 text-center font-bold border-4 border-gray-600 rounded hover:bg-red-500 hover:text-white ' >Remove </button>
     </div>
     <h4 className='bg-slate-300 p-5 m-5 w-15 h-100 text-center text-2xl font-bold border-4 border-gray-600 rounded hover:bg-black hover:text-white '> {change === false ? "Hello You Try Best" : "Hey Ahmad Jamal" } </h4>
     <button onClick={ ()=> setChange(!change) } className='bg-slate-300 px-2 py-1 m-5 text-center font-bold border-4 border-gray-600 rounded hover:bg-green-500  hover:text-white'>
Change
     </button>

    </div>
    
  )
}

export default Component_Intraction;