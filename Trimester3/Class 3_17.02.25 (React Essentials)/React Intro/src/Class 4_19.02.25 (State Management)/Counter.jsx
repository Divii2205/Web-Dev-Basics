import React, { useState } from 'react'
// here {useState} is a HOOK => a special function that lets us use the react features
// one such reach feature => STATE


function Counter() {
   const [count, setCount]= useState(0)

   function increment(){
    setCount(count+1)
   }

   function decrement(){
    if (count > 0) setCount(count-1)
   }

  return (
    <div>
        <button onClick={increment}>Increment</button>
         <h1>{count}</h1>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
