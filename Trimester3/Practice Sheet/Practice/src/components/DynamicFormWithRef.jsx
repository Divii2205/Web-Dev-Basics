import React, { useRef } from "react";

const DynamicFormWithRef = () => {
  const inputRefs = useRef([]);

  const fields = ["Name", "Email", "Age", "City"];

  const handleSubmit = () => {
    const values = inputRefs.current.map((ref) => ref.value);
    console.log("Submitted Values:", values);
    alert("Submitted: " + values.join(", "));
  };

  return (
    <div>
      <h2>Dynamic Form with useRef</h2>
      {fields.map((label, index) => (
        <div key={index}>
          <label>{label}: </label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            placeholder={`Enter ${label}`}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DynamicFormWithRef;
