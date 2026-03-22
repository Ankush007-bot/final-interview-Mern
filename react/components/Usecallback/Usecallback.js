import React,{useState,useCallback} from "react"


 const Usecallback=()=>{



    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1)

        console.log("Increment");
      }, []);
      const handleClick = () => {
        console.log("Clicked!");
      };

    const Child = React.memo(({ handleClick }) => {
    console.log("Child rendered");
    return <button onClick={handleClick}>Click Me</button>;
  });
;


// WHEN U CLICKED THE CHILD COMPONENT DOES NOT RENDERS BECAUSE IT WILL ONLY RENDER ON PROPS CHANGE
//BUT WHEN U INCREMENT THEN CHILD RENDERS BECAUS PARENT COMPONENT RENDERS DUE TO CHANGE IN STATES

//BY USING CALLBACKS WE CAN RESTRICT THE INCREMENT FUNCTION TO RE-RENDERS ON EVERY STATE UPDATE BECAUSE IT WILL MEMOIZE THE FUNCTION
return (
    <div>
      <button onClick={increment}>Increment</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default Usecallback


// Behavior:
// The useCallback hook memoizes the function.
// The function is only re-created when the value of value (dependency) changes.
// It ensures the function remains the same (does not get recreated) between renders if the dependency (value) has not changed.


// In JavaScript, Functions Are Objects:

// In JavaScript, functions are objects, meaning that each time a function is defined, it gets its own unique reference (i.e., the memory address where it's stored).
// For example, even if you define the same function multiple times, each time it’s a new instance with a different reference.
// Re-creation of Functions:

// Every time a component re-renders (such as due to a state change), a new version of the function is created. This means the function gets a new reference in memory.
// If this function is passed as a prop to child components, the child components might think that the function has changed, leading them to re-render unnecessarily.

// When to Use useCallback
// Passing as Props: If the function is passed to child components, and you want to prevent re-renders of those children when the parent re-renders.
// Expensive Functions: When the function does heavy calculations, memoization can avoid re-creating it unnecessarily.



// If a parent passes a function as a prop to its child:

// javascript
// Copy code
// const Parent = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Clicked!");
//   };

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Child handleClick={handleClick} />
//     </div>
//   );
// };

// const Child = React.memo(({ handleClick }) => {
//   console.log("Child rendered");
//   return <button onClick={handleClick}>Click Me</button>;
// });

// Problem:

// The Parent re-renders when count changes.
// handleClick is recreated during each render, causing the Child to re-render unnecessarily.
// Solution: Use useCallback

// javascript
// Copy code
// const handleClick = useCallback(() => {
//   console.log("Clicked!");
// }, []);
// Now, handleClick is memoized, and Child won't re-render unnecessarily.


// Clicking Increment will update local state and trigger a re-render, even with React.memo.

// React.memo doesn't block re-renders caused by internal state changes or context updates — only prop changes from the parent.