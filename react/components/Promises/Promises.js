import React from 'react'

export const Promises = ()=>{



//    const callBackHell1= (arg,cb)=>{
//     return cb(null,' callBack 1')
//     }

//     const callBackHell2=(arg,cb)=>{
//         return cb(null,'callBack 2')
//     }



//     const callBackHell3=(arg,cb)=>{
//         return cb(null,' callBack 3')
//     }



//     callBackHell1('first',(err,data)=>{
//          console.log(data,'1')
//         callBackHell2(data,(err,data)=>{
//             console.log(data,'2')
//             callBackHell3(data,(err,data)=>{
//                 console.log(data,'3')
//             })
//         })
//     })

    const callBackHell1= new Promise((reject,resolve)=>{

        resolve('callBack 1')
    })

    const callBackHell2=new Promise((reject,resolve)=>{

        resolve('callBack 2')
    })

    const callBackHell3=new Promise((reject,resolve)=>{

        resolve('callBack 3')
    })


    callBackHell1.then(data1=>{
        console.log(data1,'1')
               return callBackHell2
             }).then((data2)=>{
                console.log(data2,'2')
                return callBackHell3
             }).then((data3)=>{
                console.log(data3,'3')
             }).catch(error => {
                console.log('Error:', error);
            });



    // const callBackHell1 = new Promise((resolve, reject) => {
    //     resolve('callBack 1');
    // });

    // const callBackHell2 = new Promise((resolve, reject) => {
    //     resolve('callBack 2');
    // });

    // const callBackHell3 = new Promise((resolve, reject) => {
    //     resolve('callBack 3');
    // });
    // callBackHell1
    // .then(data1 => {
    //     console.log(data1, '1');  // Logs 'callBack 1'
    //     return callBackHell2;      // Returns the second promise for chaining
    // })
    // .then(data2 => {
    //     console.log(data2, '2');  // Logs 'callBack 2'
    //     return callBackHell3;      // Returns the third promise for chaining
    // })
    // .then(data3 => {
    //     console.log(data3, '3');  // Logs 'callBack 3'
    // })
    // .catch(error => {
    //     console.log('Error:', error);  // In case any promise fails
    // });



//callBack hell Problem

// function task1(callback) {
//     setTimeout(() => {
//         console.log('Task 1 completed');
//         callback(null, 'Result of task 1');
//     }, 1000);
// }

// function task2(previousResult, callback) {
//     setTimeout(() => {
//         console.log('Task 2 completed');
//         callback(null, 'Result of task 2');
//     }, 1000);
// }

// function task3(previousResult, callback) {
//     setTimeout(() => {
//         console.log('Task 3 completed');
//         callback(null, 'Result of task 3');
//     }, 1000);
// }

// Nested Callbacks (Callback Hell)
// task1((err, result1) => {
//     if (err) {
//         console.log('Error in task 1');
//         return;
//     }
//     task2(result1, (err, result2) => {
//         if (err) {
//             console.log('Error in task 2');
//             return;
//         }
//         task3(result2, (err, result3) => {
//             if (err) {
//                 console.log('Error in task 3');
//                 return;
//             }
//             console.log('All tasks completed successfully');
//         });
//     });
// });


// FIXATION OF CALL BACK HELL

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 1 completed');
            resolve('Result of task 1');
        }, 1000);
    });
}

function task2(previousResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 2 completed');
            resolve('Result of task 2');
        }, 1000);
    });
}

function task3(previousResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 3 completed');
            resolve('Result of task 3');
        }, 1000);
    });
}

// Chaining Promises
// task1()
//     .then(result1 => {
//         console.log(result1);
//         return task2(result1); // Return next promise
//     })
//     .then(result2 => {
//         console.log(result2);
//         return task3(result2); // Return next promise
//     })
//     .then(result3 => {
//         console.log(result3);
//         console.log('All tasks completed successfully');
//     })
//     .catch(err => {
//         console.error('Error:', err);
//     });


// using async await

const task = async()=>{
    let taskOne = await task1()
    let taskTwo= await task2()
    let taskThree= await task3()

    console.log(taskOne)
    console.log(taskTwo)
    console.log(taskThree)
}
//task()


// CALLBECK HELL AKSHAY SAINI

createOrder((err,orderId)=>{
 console.log(orderId,'orderId')
// here is a problem of callback hell is forming and another problem is we are giving
//the whole control of our flow ot create order api what happens if the api misbehaved and gave some wrong output
// may be it may be execute two time so our callback will also run two times flow can be distrudb this is called inverson of control
    proceedToPayment(orderId,(err,paymentId)=>{
        console.log(paymentId,'paymentId')

        showOrderSummary(paymentId,(err,orderDetails)=>{
            console.log(orderDetails)
        })
    })
})

function createOrder(cb){

    setTimeout(()=>{
       let orderId= 'abcd1234'
        return cb(null,orderId)
    },1000)
}

 function proceedToPayment(orderId,cb){
    let payemntId='pay123#abcd'
    setTimeout(()=>{
        return cb(null,payemntId)
 })
 }
 function showOrderSummary(payemntId,cb){
    let orderDetails={
        name:'order',
        oderId:'abcd1234',
        payemntId:'pay123#abcd'
    }
    setTimeout(()=>{
return cb(null,orderDetails)
    },1000)
 }




 // ASYNC AWAIT

 //async is a keyword which is used to make an async function which can handle asynchronous tasks
 // await is a keyword that can only be used in async function

 function handlePromise2(){

    let pr = prm.then((data)=>data)
    console.log('hello')
 }

   async function  handlePromise(){
    console.log('heeloo')

    let val = await pr
    console.log(val)
    console.log('i am promise')
 }




    return(
        <>
        <h1>I am Promises</h1>
        </>
    )
}

//Promise.all()
// Waits for all promises to resolve

// If any promise rejects, the whole Promise.all rejects

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then(values => console.log(values)) // [1, 2, 3]
//   .catch(err => console.log(err));



// 5️⃣ Promise.allSettled()

// Waits for all promises, regardless of resolve/reject

// Returns array of objects with {status: "fulfilled"/"rejected", value/reason}

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("fail");

// Promise.allSettled([p1, p2])
//   .then(results => console.log(results));


// Output:

// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'fail' }
// ]



// 6️⃣ Promise.race()

// Resolves/rejects as soon as any promise resolves/rejects

// const p1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
// const p2 = new Promise(resolve => setTimeout(() => resolve(2), 500));

// Promise.race([p1, p2]).then(result => console.log(result)); // 2




// 7️⃣ Promise.any() (ES2021)

// Resolves as soon as any promise fulfills

// Ignores rejected promises unless all reject

// const p1 = Promise.reject("fail1");
// const p2 = Promise.resolve(42);

// Promise.any([p1, p2]).then(result => console.log(result)); // 42




// 8️⃣ Chained Promises

// You can chain multiple .then() for sequential async tasks

// Promise.resolve(2)
//   .then(x => x * 2)
//   .then(x => x + 1)
//   .then(console.log); // 5