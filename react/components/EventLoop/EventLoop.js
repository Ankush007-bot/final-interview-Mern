"use client";
import { multiply, subtract, throttle } from 'lodash';
import React, { useState, useEffect } from "react";
import debounce from 'lodash/debounce'

export const EventLoop = ()=>{


    // The Event Loop in JavaScript is a mechanism that enables asynchronous operations by managing 
    // the execution of code, collecting and processing events,
     //and executing queued tasks in a specific order.

    // Key Concepts:
    // Call Stack:

    // A data structure that keeps track of the functions being executed.
    // When a function is called, it gets pushed onto the stack; when it finishes execution, it’s popped off.
    // Web APIs/Node APIs:

    // JavaScript interacts with external APIs (e.g., setTimeout, HTTP requests, DOM events) to handle asynchronous tasks.
    // These APIs run outside the call stack and notify JavaScript when their task is complete.
    // Task Queue:

    // A queue where asynchronous tasks (e.g., setTimeout callbacks) are placed after they complete in the Web API.
    // The event loop pulls tasks from this queue and executes them in the call stack.
    // Microtask Queue:

    // Holds tasks like Promises or MutationObserver callbacks.
    // Microta



//     console.log("Start");

// setTimeout(() => {
//   console.log("Timeout callback");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise resolved");
// });

// console.log("End");


// Explanation:

// console.log("Start") is synchronous and executed first.
// setTimeout is asynchronous; its callback is queued in the Task Queue.
// Promise.resolve() is a microtask; its .then() callback is queued in the Microtask Queue.
// console.log("End") executes synchronously.
// The Event Loop processes the Microtask Queue first, so Promise resolved logs next.
// Finally, the Task Queue is processed, and Timeout callback is logged.


//create a function multiplyByTwo(obj) that  multiplies all numeric property values of num by 2

// const obj = {
//     a:1,
//     b:2,
//     c:3
// }

// const muliByTwo= (obj)=>{

//     for(let key in obj){
//              obj[key]=2*obj[key]
//     }

// }
// muliByTwo(obj)
// console.log(obj)


const objToStri = {
    a: 'ANKUSH',
    b: 'inside b',
   fun:{
    a:'i am one',
    two:()=>{
        console.log(this.a)
    }}
};

//Implement calc.add(10).multiply(5).substract(30).add(10)

// let calc={
//     value:0,
//     add:function(num){
//            this.value+num
//            return this
//     },
//     multiply:function(num){
//          this.value*num
//         return this
//     },
//     substract:function(num){
//          this.value-num
//         return this
//     },
//     add:function(num){
//         this.value+num
//         return this
//     }

// }





// // Throttled event listener using Lodash
// const throttledScrollHandler = throttle(() => {
//     console.log('hello scroller');
//     console.log('Scroll Position:', window.scrollY);
// }, 3000);

// window.addEventListener("scroll", throttledScrollHandler);


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

    return (
        <>
        <h1>I am Event Loop</h1>

        {/* <input onChange={deboun}></input> */}
        </>
    )
}