import { useRef, useEffect } from "react";

function AutoFocusInput() {
  // 1. Create a ref
  const focus = useRef();

  useEffect(() => {
    // 2. Use ref to focus the input when mounted
    focus.current.focus();
  }, []);

  return (
    <input 
      type="text" 
      ref={focus} 
    />
  );
}

export default AutoFocusInput;