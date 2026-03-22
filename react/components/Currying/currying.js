import React from 'react'

// Currying is a functional programming concept where a function is transformed into a series of nested functions,
//  each accepting a single argument. Instead of taking all its arguments at once



// Currying breaks a function into smaller pieces that take one argument each, enabling reuse and flexibility. Here's an example to illustrate this:

// Curried Function Example:
// Without Currying:
// Suppose you have a function that calculates the total price after applying tax and a discount:

// function calculateTotalPrice(basePrice, taxRate, discount) {
//     return basePrice + (basePrice * taxRate) - discount;
// }

// console.log(calculateTotalPrice(100, 0.1, 5)); // Output: 105
// The above function works but isn’t reusable for different tax rates or discounts without re-specifying all arguments.

// With Currying:
// Using currying, we can split the function into smaller, reusable pieces:

// javascript
// Copy code
// const calculateTotalPrice = basePrice => taxRate => discount => {
//     return basePrice + (basePrice * taxRate) - discount;
// };

// // Reuse by creating specialized functions
// const priceWithStandardTax = calculateTotalPrice(100)(0.1); // Fix base price and tax rate

// console.log(priceWithStandardTax(5)); // Output: 105 (applies a discount of 5)
// console.log(priceWithStandardTax(10)); // Output: 100 (applies a discount of 10)





export const Currying = ()=>{

    const curry = (a)=>{

        return (b)=>{

          return (c)=>{
            return a+b+c
          }
        }
    }

    const multiply = a => b => a * b;

// Creating specialized functions
const double = multiply(2);
const triple = multiply(3);


    //console.log(curry(1)(2)(3))

   // console.log(double())

        //INFINITE CURRYING
   function add(a) {
    return function (b) {
        if (b !== undefined) {
            return add(a + b); // Keep returning a function for chaining
        }
        return a; // Terminate and return the final result
    };
}

const result = add(1)(2)(3)(4)(); // No argument terminates the chain
console.log(result); // 10


const infiCurry= (a)=>{
    return (b)=>{
             if(b!=undefined){
                return infiCurry(a+b)
             }
             return a
    }
}
console.log(infiCurry('a')('  b')('  c')('  d')())

// evaluate("multiply")(2)(4)(3)(5)
// evaluate("sum")(2)(4)(3)(5)
// evaluate("substract")(2)(4)(3)(5)
// evaluate("divide")(2)(4)(3)(5)


function evaluate(operation){


    switch(operation){

        case 'multiply':
            function multiply(a){
              return function(b){
                    return a*b
              }
            }
           break;

        case 'add':

        function add(a){
            return function(b){
                return a+b
            }
        }

        default :
        return null

    }


}




// var addSix = creatBase(6)
    //  addSix(10) // return 16.



    function add(a){

        let base=a

        return function(b){
            return base+b
        }
    }

    let addSix= add(6)

    console.log(addSix(10),'addSix')
    console.log(addSix(20),'addSix')

    return (
        <h1>I am Currying</h1>
    )
}