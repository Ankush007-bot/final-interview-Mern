import React, { useReducer } from 'react';


// The useReducer hook is a React hook that is used to manage state, similar to useState,
// but it is more suitable for complex state logic. It is particularly helpful when:

// The state depends on previous state values.
// You have multiple state transitions (actions) that can be handled centrally.

// Reducer: A function that defines how the state should change based on the action dispatched. It takes two arguments:
// The current state (state).
// The action dispatched (action).
// initialState: The initial state for the reducer, which can be any type (object, array, etc.).
// Reducer function that updates the state based on actions
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // useReducer with the reducer and initial state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
