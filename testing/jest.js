//Test likhne ki basic syntax
test("should add numbers", () => {
  expect(2 + 2).toBe(4);
});


Notes:

test() //→ ek test define karta hai

expect() //→ output check karta hai

toBe() //→ exact match assertion



//toBe() – primitive comparison
//expect(5).toBe(5);


//toEqual() – objects/arrays compare
//expect({name:"a"}).toEqual({name:"a"});



//toBeTruthy() / toBeFalsy()
//expect(1).toBeTruthy();
//expect(0).toBeFalsy();


//toContain()
//expect([1,2]).toHaveLength(2);



//beforeEach / afterEach / beforeAll / afterAll
beforeEach(() => console.log("runs before every test"));
afterEach(() => console.log("runs after every test"));



//Mocking
const myFn = jest.fn();
myFn();
expect(myFn).toHaveBeenCalled();


//Mock API / Async function
const fetchData = jest.fn(() => Promise.resolve("done"));

test("async test", async () => {
  const res = await fetchData();
  expect(res).toBe("done");
});




//Testing async functions

//Method 1 — async/await
test("data", async () => {
  const result = await fetchData();
  expect(result).toBe("ok");
});
//Method 2 — return Promise
test("data", () => {
  return fetchData().then(res => {
    expect(res).toBe("ok");
  });
});

//Method 3 — done callback
test("data", done => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 100);
});




///////////
function add(a, b) {
  return a + b;
}

test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});




//✅ 1. Basic Node.js Function Test

function add(a, b) {
  return a + b;
}

module.exports = add;


const add = require("./add");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});


//✅ 2. Test async function (Promise + async/await)
function fetchData() {
  return Promise.resolve("success");
}

module.exports = fetchData;


const fetchData = require("./fetchData");

test("returns success", async () => {
  const data = await fetchData();
  expect(data).toBe("success");
});



//✅ 3. Test Node API Service (Mock API call)

//userService.js
const axios = require("axios");

async function getUser(id) {
  const res = await axios.get(`https://api.com/user/${id}`);
  return res.data;
}

module.exports = getUser;


//👉 Test (Mock axios)
const axios = require("axios");
const getUser = require("./userService");

jest.mock("axios");

test("should fetch user", async () => {
  axios.get.mockResolvedValue({ data: { name: "Ankush" } });

  const user = await getUser(1);

  expect(user.name).toBe("Ankush");
});





// ✅ 4. Testing Express Route (Supertest + Jest)

// Bohot companies ye poochti hain:
// “How do you test Express APIs?”

👉 server.js
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("hello world");
});

module.exports = app;

//👉 test
const request = require("supertest");
const app = require("./server");

test("GET /hello", async () => {
  const res = await request(app).get("/hello");
  expect(res.text).toBe("hello world");
  expect(res.statusCode).toBe(200);
});


//✔ Ye Express test ka must-know format hai.



//✅ 6. Error Testing (try/catch)
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

test("should throw error", () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});






// ✅ 1. beforeEach()

// 👉 Har test se pehle chalata hai
// Agar aapke 5 tests hain, to ye 5 baar run hoga.

// Example
let count = 0;

beforeEach(() => {
  count = 10;
});
////////
let users;

beforeEach(() => {
  users = ["a", "b", "c"];   // har test ke liye fresh array
});

test("Test 1", () => {
  expect(count).toBe(10);
});

test("Test 2", () => {
  expect(count).toBe(10);
});


// ✔ Yeh har test se pehle count ko reset karega.
// ✔ Interview me kahte:
// “To reset or initialize data before each test.”

// ✅ 2. afterEach()

// 👉 Har test ke baad chalata hai

// Ye mostly cleanup ke liye hota hai.

Example
afterEach(() => {
  console.log("Test finished");
});


// Agar 3 tests hain → ye 3 baar chalega.

// ✔ Logging clean-ups
// ✔ Mock reset karna
// ✔ Temp files delete karna

// ✅ 3. beforeAll()

// 👉 Pure test suite shuru hone se pehle ek hi baar chalata hai
// (Chahe 10 tests ho)

// Example:
// let db;

beforeAll(() => {
  db = "connected";
  console.log("DB connected");
});


// Common use:

// DB connect

// Server start

// Global variable set karna

// Interviewer line:
// “Runs once before all tests — used for heavy setup.”

// ✅ 4. afterAll()

// 👉 Pure test suite khatam hone ke baad ek baar run hota hai

Example:
afterAll(() => {
  console.log("DB closed");
});


// Common use:

// Database disconnect

// Close server

// Cleanup memory






//Mocking 
// const myFn = jest.fn(); myFn(); expect(myFn).toHaveBeenCalled();

//Mocking ka simple matlab: real function ko run nahi karna, bas uske behave ko fake banana taaki test fast,
//  safe, predictable ho.

// Jest m jest.fn() ek fake function banata hai.
// Is fake function ka koi real logic nahi hota — sirf record karta hai ki:

// function call hua ya nahi

// kitni baar hua

// kis argument se hua

// kya return kiya

const myFn = jest.fn();   // mock function ban gaya

myFn();                   // isko call kiya

expect(myFn).toHaveBeenCalled(); // check kiya ki call hua ki nahi

// Yaha Mocking ka use kya hai?

// Real function ki zaroorat nahi

// Tum real function ki implementation likhe bina, sirf uske calls test kar sakte ho.

// Tracking

// Jest apne aap track karta h ki:

// kitni baar call hua: toHaveBeenCalledTimes(n)

// kis argument se call hua: toHaveBeenCalledWith(args)

// kya return value thi (agar set ki ho)

// Fake behavior set kar sakte ho

// const myFn = jest.fn().mockReturnValue("hello");

// console.log(myFn());  // "hello"


// Why mock fetchUser?

// Actual API call slow hoga

// Internet chaiye hoga

// Test kabhi fail ho sakta hai API down ho toh

// Test reliable & fast chahiye

// ✅ File: userService.js (API call inside same file)
// userService.js

async function getUserDetails(id) {
  const response = await fetch(`https://api.example.com/user/${id}`);
  const data = await response.json();
  return data;
}

module.exports = getUserDetails;


// ✅ File: userService.test.js (Mocking fetch)

// Jest automatically global fetch ko mock kar sakta hai.

// userService.test.js

const getUserDetails = require("./userService");

// Mock global fetch
global.fetch = jest.fn();

test("should return user details using mocked fetch", async () => {
  // 1. Mock fetch return value
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue({ id: 1, name: "Ankush" })
  });

  // 2. Call the function
  const result = await getUserDetails(1);

  // 3. Check if fetch was called
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/user/1");

  // 4. Check result
  expect(result).toEqual({ id: 1, name: "Ankush" });
});


// agar tumne global level par global.fetch = jest.fn() mock kar diya,
// to poori application me jitni baar fetch call hoga, Jest usko track karega.






// ✅ 3. Error Testing (try/catch)   Jest me error state ko kaise test karte hain

// fetch ko mock karke error throw karwate hain.

// 📁 userService.test.js
const getUser = require("./userService");

global.fetch = jest.fn();

test("should handle fetch error (try/catch)", async () => {
  // 1. Mock fetch to force an error
  global.fetch.mockRejectedValue(new Error("Network Error"));

  // 2. Call the function
  const response = await getUser(1);

  // 3. Expect catch block output
  expect(response).toEqual({ error: "Network Error" });
});