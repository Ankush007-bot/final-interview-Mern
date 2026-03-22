 //OUTPUT BASED QUESTION IN JAVASCRIPT

//  1.
// var a=5  // now it is global scope

// {
//   var b= 6  // not is in block scope
// }

// function varr(){
//    var c= 10
//    return c
// }

// console.log(a)
// console.log(b)
// console.log(varr())
//2.
//    let a= 10;

//    function mul(x){
//     return x*10;
//    }

//    let b = mul(2)
// console.log(b,'b')


//3. iifee
//  (
//   function iifee(sum){
//    console.log(sum)
//   }
//  )(25)


//4
//   for(var i=0;i<5;i++){

//     setTimeout((i)=>{
//       console.log(i)
//     },1000*i)
//   }



  //5.
//   var x=21

//   var fun = function(){
//     console.log(x,'145');
//     var x= 20;
//   }

//   fun()


  //6

    //   function f(a){

    //   return function(b){
    //     return `${a}${b}`
    //   }
    //  }

    //  //console.log(f(5))

    // console.log(f(5)(6))


    // const currying = (a)=>{

    //     return (b)=>{
    //            return (c)=>{
    //             return a+b+c
    //            }
    //     }
    // }
        //  console.log(currying(1)(2)(3),'currying')



    // const optimize = ()=>{
    //     let a
    //     for (let i=0;i<=10;i++){
    //          a +=i*i
    //     }

    //    // return a +100
    //     return   (a)=>{
    //         return a+100
    //     }
    // }

    // // console.time(optimize(0),'closure')
    // // console.timeEnd(optimize(0),'closure time')

    // var opt =  optimize()

    // console.log(opt,'opt')
    // console.log(opt(0),'0pt2')

  //7  optimization code using closures

//   function find(){

//     let a = []
//     for(let i =0;i<500;i++){
//       a[i]=i*1
//     }
//     return function (index){

//      // console.log(a[5],'a5')
//       console.log(a[index],'index')
//     }
//   }

//   const closure = find()
//   closure(5)


  //8 what is the ouput

//   for(var i =0;i<3;i++){

//     setTimeout(()=>{
//       console.log(i,'i')
//     },1000)
//   }

  // if something is wrong how to fix it

          //OBJECT
  //9

//   const user = {
//     name:'Ank',
//     profile:'solution deve',
//     comp:'info axon'
//   }

//   delete user.profile

// console.log(user,'user obj')


//10.
//  const func = (function(a){
//   delete a
//   console.log(a)
//  })(5)


//11.

// const user =  {
//   name:'Ank',
//   'today-task':'study-hard',
// }

// console the today-task property


//12.

// const obj = {
//   a:'one',
//   b:'two',
//   a:'three'
// }

// console.log(obj,'obj')


//13.

// const a ={};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b]= 123
// a[c]=456;

//  console.log(a[b],'a[b]')


//14.

//    const setings ={
//     username:'piyush',
//     level:19,
//     health:21
//    }

//   let str= JSON.stringify(setings,['level','health'])
//   console.log(str,'str')
  //console.log(setings)

   // stringify only level and health keys

   //15.

//    const shape = {
//     redius:10,

//     diameter(){
//       return this.radius*2;
//     },
//     parameter:()=> 2*Math.PI*this.radius,
//    }

//    console.log(shape.diameter())
//    console.log(shape.parameter())


  //16

//   const user ={
//       username:'piyush',
//       level:19,
//       health:21
//      }

//      const {username,level}=user

//      console.log(username)

     //const username = "Ank"  how can we assign value again in predefine constant variable username

    //  const {username:originalUsername}=user

    //  const  username='ANks'




  // 17.
// const user ={
//     name:'piyush',
//     first:{
//         fullname:'Piyush garg'
//     }
// }
// const {first:{fullname}}=user

// console.log(fullname,'fullname')



//   const {
//     fullname:{first}
//   }=user

//   console.log(first,'first')

  //18.

  // let c ={greeting:"hey"}

  // let d;

  // d=c

  // c.greeting="hello"

  // console.log(d.greeting,'d.greeting')



  //19.

  // let person ={name:'lyla'}
  // const members = [person]

  // person=null
  // console.log(person,'person')



  //20.

  // const value={number:10}

  // const multiply = (x={...value})=>{
  //     console.log((x.number*=2))
  // }

  // multiply()
  // multiply()

  // multiply(value)
  // multiply(value)


 //21.

//  function changeAgeAndReference(person){
//        person.age=25;

//        person ={
//         name:"john",
//         age:50
//        }
//        return person
//  }

//  const personObj1= {

//         name:'Alex',
//         age:30,
//  }


//  const personObj2 = changeAgeAndReference(personObj1)

//  console.log(personObj1)
//  console.log(personObj2)


    //PROMISES


//23  what will be the output

    // const promose1= new Promise((resolve,reject)=>{
    //        console.log(1);
    //        resolve(2)
    // })

    // promose1.then((res)=>{
    //   console.log(res)
    // })


    // console.log('end')


//24


//  console.log("start")

//  const fn = new Promise((resolve,reject)=>{
//         console.log(1)
//         resolve("success")
//  })

//  console.log('middle')

//  fn().then((res)=>{
//      console.log(res,'res')
//  })

//  console.log("end")

// Step-by-step Execution:
// console.log("start")
// 👉 Output: start

// Creating a new Promise:

// console.log(1) runs immediately during promise creation.
// 👉 Output: 1

// resolve("success") is called, but the .then() callback is asynchronous and goes to the microtask queue.

// console.log("middle")
// 👉 Output: middle

// .then(...) is set up but won't run yet.

// console.log("end")
// 👉 Output: end

// After the current call stack finishes, the microtask queue is processed:

// The .then() callback runs:
// 👉 Output: success res


//25.

// function job(){

//   return new Promise((resolve,reject)=>{

//     reject()
//   })
// }

// let promise = job()

// promise.then(()=>{
//   console.log('success')
// }).then(()=>{
//   console.log('success')
// }).catch(()=>{
//   console.log('error')
// }).then(()=>{
//   console.log('success 4')
// })




//26.

// function jobState(state){
//   return Promise((resolve,reject)=>{
//           if(state){
//             resolve('success')
//           }

//           reject('error')
//   })
// }

// let prmoise = jobState(true)

// prmoise.then((data)=>{
//    console.log(data)
//    return jobState(false)
// })
// .catch(()=>{
//   console('error')
//  return "error caught"
// })
// .then((data)=>{
// console.log(data)
// return jobState(true)
// })
// .catch((error)=>{
//  console.log(error)
// })


function jobState(state){
  return new Promise((resolve,reject)=>{
          if(state){
            resolve('success')
          }

          reject('error')
  })
}

// let prmoise = jobState(true)

// prmoise.then((data)=>{
//    console.log(data)
//    return jobState(false)
// })
// .catch(()=>{
//   console.log('error')
//  return jobState(false)
// })
// .then((data)=>{
// console.log(data)
// return jobState(true)
// })
// .catch((error)=>{
//  console.log(error)
//  return jobState(true)
// }).then((data)=>{

// console.log(data)
// return 'success 1'
// }).then((data)=>{
// console.log(data)
// })

// this KEY WORD

//27.

// let a= 5

//this.a=10

// a =15

// function getParam(){
//   console.log(this.a)
// }

// getParam()


// let a =15
// var b=16
// c=7

// function getParam(){
//  console.log(this.a)
//  console.log(this.b)
//  console.log(this.c)
// }

// getParam()


//28.

// let user = {
//   name:"Ank",
//   age:24,
//   getDetails(){
//     console.log(this.name)
//   }
// }

// user.getDetails()


// let user = {
//     name:"Ank",
//     age:24,
//     getDetails(){

//       const nestedArr=()=>{console.log(this.name)}
//          nestedArr()
//     }
//   }

//   user.getDetails()


// Arrow functions inherit this from their lexical (outer) scope — and in your case, 
// the outer scope is the method getDetails, which is called on the user object.

// So, in this case:

// this in getDetails() refers to the user object.


//29. what is the output

// let user = {
//   name:"Piyush",
//   age:24,
//   childObj:{
//     newName:"road",
//     getDetails(){
//       console.log(this.newName,"and",this.name)
//     }
//   }
// }

// user.childObj.getDetails()

//30.  what is the ouput if some error fix it

// let user = {
//   name:"Piyush",
//   age:24,
//   getDetails:()=>{
//     console.log(this)
//   }
// }

// user.getDetails()


// Even if you invoke the getDetails method with call to set this, it will not change the behavior:

// let user = {
//   name:"Piyush",
//   age:24,
//   getDetails: function(){
//     (()=>{
//         console.log(this.age)
//       })()

//   } 
// }

// user.getDetails()



// javascript
// Copy code
// user.getDetails.call(user); // Output: undefined or empty string
// Why?
// Because 'this' in the arrow function is lexically bound to its outer scope (the global scope, in this case), and call cannot override it.

//31.

// const user = {
//   firstName:"Piyush",
//   getName(){
//     const firstName = "Piyush Aggarwal"
//     return this.firstName
//   }
// }

// console.log(user.getName())

//32.

// function makeUser(){
//   return {
//     name:"john",
//     ref:this,
//   }
// }

// let user = makeUser()

// console.log(user.ref.name)

// Since makeUser() is called as a plain function (makeUser()), not as a method of an object, 
// this inside it refers to the global object (in non-strict mode) or undefined (in strict mode).

// If you want ref to refer to the object itself (user), you need to define it as a method:

// javascript
// Copy
// Edit
// function makeUser() {
//   return {
//     name: "john",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();
// console.log(user.ref().name); 


//33.

// const user = {
//   name:"Piyush",
//   logMessage(){
//     console.log(this.name)
//   }
// }

// setTimeout(user.logMessage,1000)

// When you pass user.logMessage to setTimeout, you're passing just the function, not the object it belongs to.

// So, the function is executed by setTimeout without any object context, and in that case, this becomes:

// undefined (in strict mode)




// When you pass user.logMessage to setTimeout, you are passing a reference to the logMessage function, detaching it from the user object.
// As a result, when logMessage is executed by setTimeout, this no longer refers to the user object. Instead:


//34

// const user = {
//   name:"piyush",
//   greet(){
//     return `hellow,${this.name}`
//   },
//   farewell:()=>{
//     return `good byr, ${this.name}`
//   }
// }

// console.log(user.greet())
// console.log(user.farewell())


//35.

// var length =4

// function callback(){
//   console.log(this.length)
// }

// const object = {
//   length:5,
//   method(fn){
//     fn()
//   },
// }

// object.method(callback);


// 1. callback() is passed to object.method(fn)
// Inside method, you're doing: fn();

// So fn() is called as a regular function, not as a method of object

// In non-strict mode, this inside fn() refers to the global object (window in browsers or global in Node)

// 2. You decla




// const object = {
//   length:5,
//   method(fn){
//     arguments[0]()
//   },
// }

// object.method(callback,2,3) //*** */



// CALL BIND APPLY

//36

// var obj = {name:"piyush"}

// function sayHello(age){
//   return "Hello" + this.name+"is " + age
// }

// how can you print value of name variable inside sayHello function


//37. what would be the output of above function using sayHello.apply(obj,[24,"Ank"])

//38

// const person = {
//   fullName: function(city, country) {
//     return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
//   }
// };

//  const person1 = { firstName: "John", lastName: "Doe" };

//  person.fullName.apply(person1,[modinagar,Bharat])
// console.log(person.fullName.apply(person1,['modinagar','Bharat']))

// execute the above funtion using apply method

//39 Question 1: "Hello, Alice!"
   //apply sets this to user and passes ["Hello", "!"] as arguments.

//40
//const numbers = [12, 45, 7, 22];
//console.log(`Max: ${max}, Min: ${min}`);

//41  push array 2 into array using apply

//const array1 = [10, 20];
//const array2 = [30, 40, 50];

//42

// const person1 = {
//   firstName: "John",
//   lastName: "Smith",
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// const person2 = { firstName: "Jane", lastName: "Doe" };

// const fullName = person1.getFullName.apply(person2);
// console.log(fullName);


//43

// function Vehicle(make, model) {
//   this.make = make;
//   this.model = model;
// }

// function Car(make, model, year) {
//   Vehicle.apply(this, [make, model]);
//   this.year = year;
// }

// const myCar = new Car("Toyota", "Corolla", 2022);

// console.log(myCar);


//44  What will be the output of the following code? Why?

// const person = {
//   name: "Alice",
//   greet: function() {
//     console.log(`Hello, ${this.name}`);
//   }
// };

// const greetFunction = person.greet;
// const boundGreet = greetFunction.bind(person);

// boundGreet();

//45

// function add(a, b) {
//   return a + b;
// }

// const addFive = add.bind(null, 5);
// console.log(addFive(10));


//46.

// var status = "a";

// setTimeout(()=>{
//   const status = "s";

//   const data = {
//     status:"N",
//     getStatus(){
//       return this.status;
//     }
//   }

//   console.log(data.getStatus())
// console.log(data.getStatus.call(this))
// },0)


//47

// function f(){
//   console.log()
// }

// let user = {
//   g:f.bind(null)
// }

// user.g()


//48

//  function checkPassword(ok,fail){

//   let password = prompt("password","")
//   if(password=="roadside") ok()
//     else fail();
//  }

//  let user = {
//   name:"Piyush Aggarwal",
//   login(result){
//     console.log(this.name+(result?"login":"failed"))
//   }
//  }



// checkPassword(user.login(true),user.login(false));

//fix the above function



//49.

//  const age=10;

//  var person = {
//   name:'piyush',
//   age:20,
//   getAgeArrow:()=> console.log(this),
//   getAge:function (){
//     console.log(this.age);
//   }
//  }

//  var person2 = {age:24}

//  person.getAgeArrow.call(person2)
//  person.getAge.call(person2)


 // MAP FILTER REDUCE

// 50.Write a function that sums all the numbers in an array using reduce.
   // const numbers = [1, 2, 3, 4, 5];

//51.Finding the Maximum Value in an Array:
     //const numbers = [10, 5, 8, 13, 25, 2];

//52.Write a function that flattens a nested array of arrays into a single array using
     //const arrays = [[1, 2], [3, 4], [5, 6]];

//53 Use reduce to count the occurrences of each element in an array
    //const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];


 //54.How can you group an array of objects by a specific property using reduce?

//  const users = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 30 },
//   { name: 'David', age: 25 }
// ];


//54.Use reduce to remove duplicates from an array.
     //const numbers = [1, 2, 2, 3, 4, 4, 5];

//55.How would you use reduce to transform an array of objects into a single object, where the key is a specific property and the value is another property?

// const items = [
//   { id: 1, name: 'apple', price: 2 },
//   { id: 2, name: 'banana', price: 1 },
//   { id: 3, name: 'orange', price: 3 }
// ];

//56. How can you calculate the average of an array of numbers using reduce?
//const numbers = [1, 2, 3, 4, 5];




 //57.
 //console.log(a,'a')    //temporal zone concept
  //let a='assa'

  //58.
 // console.log(b,'b')
   // var b='asdsd'

//  59. console.log(c)
//  const c = 'asjkl'

// 60.
// console.log(name,'name')
//   var name = 'string'

  //61.
   // var x=20;

  // function foo(){
  //   console.log(x,'x')
  //   var x=10
  // }

  // function foo(){
  // x=10
  // console.log(x,'x()')
  // }
  // console.log(x,'x')

  //foo()   //memory creation phase


  //62
  // foo()
  // var foo = 23

  // function foo(){
  // console.log('bar')
  // }

  // foo()

  //memory creation phase
  // code execution phase


  //63.
//   function outer(){
//          function inner(){
//          console.log(x,'x')

//          }

//          const x= 5
//          return inner
// }

// const inner = outer()
// inner
// console.log(inner,'inner')

//64.
// function one(){
//   var c = 1
//   let a = 2
//   b= 3
// }

// console.log(c)
// console.log(a)


//65
// var x=20

//   function one(){

//   console.log(x,'x')
//   }

//  one()

  //66.
//  (function(){
//      for(var i=0;i<=3;i++){
//       setTimeout(()=>{
//         console.log(i)
//       },1000)
//     }
//     }())

    // fix the problem in above problem

  //67
  // setTimeout(()=>{
  //    console.log('i')
  // },1000)

  // let promis = new Promise({

  // })

// let promis = new Promise((resolve,reject)=>{

//   resolve( 'i am promise')


// })

 //promis.then((data)=>{console.log(data,'data')}).catch((err)=>{console.log(err,'err')})

 //Promise.then(console.log('promise')).catch()

  //console.log('end')


  //68.
  // async function foo(){
  //        return 23
  //  }

  //  let result = foo()

  //  console.log(result,'result')

  //69.
  // function foo(){
  //       console.log('hiii')
  //    }
  //  var a = new foo()

  //  console.log(a,'a')


  //70.

  // let a [11,3,22,44,5]

  // let b=[55,5,77,45,65]

  // let a [11,3,22,44,5]

  // let b=[12,5,17,45,65]  let c [ ]  write a code so that in array c both a and b elements and array c will be sorted


//  71.
//  let obj = {
//     x:1,
//     getX(){
//       const inner =function(){
//         console.log(x,'x1')
//       }
//       inner()
//     }


//   }

// obj.getX()

//  what will be the value of  obj.getX()


//72. write a code to create a function which gives sum of all parameters Sum(2)(3)(1)
//73.create a function to evaluate ("multiply")(4)(2)

//74. create an obj calculator so that  // ouput based
        // calculator.read()
        //calculator.sum()

 //75. Implement calc.add(10).multiply(5).substract(30).add(10)

 //76.write a function that would allow to do :

    //var addSix = creatBase(6)
    //addSix(10) // return 16.



//     # JavaScript Output-Based Interview Questions

// ## 1.

// ```js
// console.log(1 + "2" + 3);
// ```

// ## 2.

// ```js
// let a = [1,2,3];
// let b = [1,2,3];
// console.log(a == b);
// console.log(a === b);
// ```

// ## 3.

// ```js
// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// ```

// ## 4.

// ```js
//  let x = "5";
// console.log(+x + 10);
// console.log(x + 10);
// ```

// ## 5.

// ```js
// console.log(typeof NaN);
// console.log(NaN == NaN);
// ```

// ## 6.

// ```js
// let obj = {a:1};
// let c = obj;
// c.a = 5;
// console.log(obj.a);
// ```

// ## 7.

// ```js
//console.log([..."joy"]);
// ```

// ## 8.

// ```js
// var a = 10;
// (function(){
//   console.log(a);
//   var a = 20;
// })();
// ```

// ## 9.

// ```js
// let p = new Promise((res) => res(1));
// p.then((x) => console.log(x));
// console.log(2);
// ```

// ## 10.

// ```js
// console.log(null == undefined);
// console.log(null === undefined);
// ```

// ## 11.

// ```js
// console.log(typeof []);
// console.log(typeof {});
// console.log(Array.isArray([]));
// ```

// ## 12.

// ```js
// function foo(){
//   return{
//     a: 10
//   }
// }
// console.log(foo());
// ```

// ## 13.

// ```js
// console.log("5" - 2);
// console.log("5" + 2);
// ```

// ## 14.

// ```js
// const arr = [1,2,3];
// arr[10] = 5;
// console.log(arr.length);
// console.log(arr);
// ```

// ## 15.

// ```js
// console.log([1,2] == "1,2");
// ```

// ## 16.

// ```js
// console.log(true + true);
// console.log(true - false);
// ```

// ## 17.

// ```js
// let x = [1, 2, 3];
// let y = x;
// y.push(4);
// console.log(x);
// ```

// ## 18.

// ```js
// console.log(0.1 + 0.2 == 0.3);
// ```

// ## 19.

// ```js
// let a = "10";
// let b = 2;
//console.log(a / b);
 //console.log(a * b);
// console.log(a - b);
// console.log(a + b);
// ```

// ## 20.

// ```js
// console.log([] == 0);
// console.log([] === 0);
// ```

// ## 21.

// ```js
// function test() {
//   console.log(a);
//   //console.log(b);
//   let b = 20;
//   var a = 10;
// }
// test();
// ```

// ## 22.

// ```js
// console.log(typeof null);
// console.log(null instanceof Object);
// ```

// ## 23.

// ```js
// let n = "hello";
// n[0] = "H";
// console.log(n);
// ```

// ## 24.

// ```js
// const obj = { a: 1 };
// Object.freeze(obj);
// obj.a = 10;
// console.log(obj.a);
// ```

// ## 25.

// ```js
// console.log([1] + [2,3]);
// console.log([1,2] + [3,4]);
// // ```

// ## 26.

// ```js
// console.log("b" + "a" + + "a" + "a");
// ```

// ## 27.

// ```js
// let a = {x: 1};
// let b = {y: 2};
// console.log(a + b);
// ```

// ## 28.

// ```js
// (function(){
//   var x = 10;
// })();
// console.log(typeof x);
// ```

// ## 29.

// ```js
// let obj = { a: 1 };
// //delete obj.a;
// console.log(obj.a);
// ```

// ## 30.

// ```js
 //console.log([undefined] == [null]);
// ```

// ## 31.

// ```js
 //console.log(..."abc");
// ```

// ## 32.

// ```js
 //console.log([1,2,NaN].includes(NaN));
 //console.log([1,2,NaN].indexOf(NaN));
// ```

// ## 33.

// ```js
// console.log(new Boolean(false));
// if(new Boolean(false)) {
//   console.log("Executed");
// }
// ```

// ## 34.

// ```js
//  console.log(1 < 2 < 3);
//  console.log(3 > 2 > 1);
// ```

// ## 35.

// ```js
//console.log(typeof (function(){}()));
// ```


