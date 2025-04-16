import React, { useState } from "react";

function DropdownSelector() {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <h2>Dropdown Selector</h2>
      <select value={selected} onChange={handleChange}>
        <option value="">-- Select a fruit --</option>
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Banana">Banana</option>
        <option value="Mango">Mango</option>
      </select>

      <p>Selected: {selected || "None"}</p>
    </div>
  );
}

export default DropdownSelector;
