import React, {useEffect, useState } from "react";

function Ue() {
  const [count, setCount] = useState(0);
  const [text , setText] = useState('')


  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

//   useEffect(()=>{
//     console.log('Use effect Runs')
//     document.title = `Button Clicked ${count} times`
//   })

//   useEffect(()=>{
//     console.log('Use effect Runs')
//     document.title = `Button Clicked ${count} times`
//   }, [])

  useEffect(()=>{
    console.log('Use effect Runs')
    document.title = `Button Clicked ${count} times`
  }, [text])
  
  // useEffect hook runs at the end 
  

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>

      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <h3>{text}</h3>
    </div>
  );
}

export default Ue;