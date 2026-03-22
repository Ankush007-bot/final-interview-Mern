import React, { useState, useMemo } from 'react';

// If you have a function that performs a computation (e.g., sorting data, complex arithmetic),
// React will re-run that function every time the component renders. This is fine for simple calculations,
// but it can be inefficient for expensive or complex operations.
// Avoiding Recalculation:

// With useMemo, you memoize the result of the computation. This means React stores the result and doesn't re-run the function unless
// the dependencies (the inputs that the function depends on) change.

export const ExpensiveComputationComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');

  // Expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 1000;  // Expensive operation
  }, [count]); // Recompute only if `count` changes

  return (
    <div>
      <p>Result of expensive calculation: {expensiveCalculation}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setName(name === 'Alice' ? 'Bob' : 'Alice')}>Change Name</button>
    </div>
  );
};
