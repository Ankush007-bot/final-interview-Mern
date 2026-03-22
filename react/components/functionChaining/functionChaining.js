import { trackSynchronousRequestDataAccessInDev } from 'next/dist/server/app-render/dynamic-rendering'
import React from 'react'

// In JavaScript, function chaining is commonly used with objects,
// where each method in the chain returns the object itself (this)

// This technique allows methods to be chained together in a single line of code,
// making it more concise and readable.


const FunctionChaining=()=>{


   //without Chaining:

// const obj = {
//   value: 0,
//   add(num) {
//     this.value += num;
//   },
//   mul(num) {
//     this.value *= num;
//   },
// };

// obj.add(5);
// obj.mul(2);
// console.log(obj.value); // Output: 10


 //WITH CHAINING

//  const obj = {
//     value: 0,
//     add(num) {
//       this.value += num;
//       return this; // Enables chaining
//     },
//     mul(num) {
//       this.value *= num;
//       return this; // Enables chaining
//     },
//     sub(num) {
//       this.value -= num;
//       return this; // Enables chaining
//     },
//     getValue() {
//       return this.value;
//     },
//   };


    return (
        <>ss
        <h1>I am Funtion Chaining</h1>
        </>
    )
}

export default FunctionChaining