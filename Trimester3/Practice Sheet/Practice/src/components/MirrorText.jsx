import { useState } from "react";

function MirrorText() {
  // 1. Create state variable for input
  const[input, setInput] = useState("");

  const handleChange = (e) => {
    // 2. Update state with e.target.value
    setInput(e.target.value);
  };

  return (
    <>
      <input 
        type="text" 
        value={input} 
        onChange={handleChange} 
      />
      <p>{input}</p>
    </>
  );
}

export default MirrorText;
