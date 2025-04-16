import React, { useState, useMemo } from "react";

// Write your expensive fibonacci function here
const fibonacci = (n) => {
  // TODO: Implement recursive or loop-based Fibonacci logic
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const FibonacciCalculator = () => {
  const [number, setNumber] = useState(0);


  // Use useMemo to optimize calculation
  const fib = useMemo(() => {
    // TODO: Call the fibonacci function and return result
    return fibonacci(number)
  }, [number]);

  return (
    <div>
      <h1>Fibonacci Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <p>
        Fibonacci of {number} is: {/** Show result here */} {fib}
      </p>
    </div>
  );
};

export default FibonacciCalculator;
