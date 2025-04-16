import React, { useState, useRef } from "react";

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const timerRef = useRef(null); // To store timeout ID
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // TODO: Clear the previous timeout (if any)
    clearTimeout(timerRef.current)
    // TODO: Set a new timeout to simulate API call
    timerRef.current = setTimeout(() => {
        setResult(value)
    }, 1500)
  };

  return (
    <div>
      <h2>Debounced Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {/* TODO: Show debounced result or console.log it */}
      <p> {result} </p>
    </div>
  );
};

export default DebouncedSearch;
