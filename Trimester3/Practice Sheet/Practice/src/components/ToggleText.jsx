import { useState } from "react";

function ToggleText() {
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    // 1. Toggle the visibility
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={handleToggle}>
        {/* 2. Change button label based on state (e.g., "Hide"/"Show") */}
        {visible ? "Hide" : "Show"}
      </button>
      {/* 3. Show paragraph only if visible is true */}
      {visible ? <p>Now you see me!</p> : ""}
    </>
  );
}

export default ToggleText;
