import React from 'react'

export const Closures = ()=>{

//CLOSURES ALWAYR RETURNS FUNCTION

    // const closures =(()=>{

    //     let  value =5

    //     const inner = ()=>{
    //         console.log(value)  /// here value accessing the property of variable defined outside the inner functn. This is called closures
    //     }
    //     inner()
    // })(5)


    //


   //add(5)=15
   //add(10)=20

   //mul(10)=100

//    const calc=()=>{
//     let preVal= 10
//     return function add(num){
//         return preVal+num
//     }
//     }

//    const opr = calc()
//    console.log(opr(6)) //16
  // console.log(opr(10))//20

  // TIME OPTIMIZATION USING CLOSURES


  const timeOptimization=(index)=>{
    console.time('time start')
    let value=[]
    for(let i=0;i<10000;i++){
       // console.log(i)
    value[i]=i*1
    }

    console.timeEnd('time end')
    console.log(value[index])

    // return function(){
    //     return value[index]
    // }
  }

  timeOptimization(1000)

    //let opt= timeOptimization()

    //console.log(opt(5000))


  //console.time and console.timeEnd

//   const addNum =(a)=>{
//     let value=a
//     return function add(b){
//          return a+b
//     }
// }
// add= addNum(6)
// console.log(add(10))

//PRIVATE COUNTER
function createCounter() {
  let count = 0; // Private variable

  return {
      increment: function () {
          count++;
          return count;
      },
      decrement: function () {
          count--;
          return count;
      },
      getCount: function () {
          return count;
      }
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// Trying to access `count` directly will fail:
console.log(counter.count); // undefined

  return (
        <>
        <h1>I am Closures</h1>
        <button onClick={ console.log(counter(1))}>privateCounter</button>
        </>
    )
}

