
import React, { useState, useEffect } from "react";
import throttle from "lodash/throttle";
import { keys } from "lodash";

const ThrottledComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Define a throttled version of the scroll handler
    const throttledScrollHandler = throttle(() => {
        console.log('throttle')
      setScrollPosition(window.scrollY);
    }, 3000); // 300ms throttle delay

    // Add the event listener
    window.addEventListener("scroll", throttledScrollHandler);

    return () => {
      // Clean up the listener to avoid memory leaks
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, []); // Empty dependency array ensures this effect runs once


  //palendrom




  (()=>{
    const str = "racecar";
  let newStr=''
     for(let i=str.length-1;i>=0;i--){
        newStr += str[i]
     }
     console.log(newStr,'newstr')
       if(newStr===str){
        console.log('given string is palendrom')
       }

  })()




  return (
    <div>
      <h1>Throttled Scroll Event with Lodash</h1>
      <p>Scroll Position: {scrollPosition}px</p>
      <div style={{ height: "200vh", background: "linear-gradient(to bottom, #fff, #ddd)" }}>
        Scroll down to see the throttled effect in action!
      </div>
    </div>
  );
};

export default ThrottledComponent;



//////  THROTTLE

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func.apply(this, args);
      lastCall = now;
    }
  };
}

// Example function (normal function, so `this` works if needed)
function apiCall(data) {
  console.log("API called with:", data, "at", new Date().toLocaleTimeString());
}

// Create throttled version
const throttledApi = throttle(apiCall, 2000);

// Simulate user action (like scrolling or typing quickly)
throttledApi("A");
setTimeout(() => throttledApi("B"), 500);
setTimeout(() => throttledApi("C"), 1000);
setTimeout(() => throttledApi("D"), 2500);
setTimeout(() => throttledApi("E"), 3000);
