import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";

const DebouncedInput = () => {
  const [inputValue, setInputValue] = useState(""); // Immediate value
  const [debouncedValue, setDebouncedValue] = useState(""); // Debounced value

  // Debounced function to update the state
  const updateDebouncedValue = useCallback(
    debounce((value) => {
      setDebouncedValue(value); // Update the debounced state
    }, 300),
    [] // Ensure the debounce function is stable
  );

  // Handle input changes
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update the immediate value
    updateDebouncedValue(value); // Call the debounced updater
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />
      <p>Immediate Value: {inputValue}</p>
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default DebouncedInput;


/////////////
/////////////////

function debounce(func, delay) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}



function handleSearch(query) {
  console.log('Searching for:', query);
}

const debouncedSearch = debounce(handleSearch, 500);

// Simulating typing
debouncedSearch('a');
debouncedSearch('ab');
debouncedSearch('abc'); // Only this one executes after 500ms





//////////////////////////
function handleApi(args){
  
  console.log(`Api is calling ${args} by using function ${this.name} `)
}

function handleDebounce(func,delay){
     let timer
     const context = { name: "handleDebounce" };
  return function(...args){
     clearTimeout(timer)
     timer=setTimeout(()=>{
      func.apply(context,args)
     },delay)

  }
}




