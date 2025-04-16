import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    // 1. Prevent empty input from being added
    // 2. Add todo to list
    if (input.trim() !== "") {
      setTodos([...todos, input]);
    }
    // 3. Clear input field
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
