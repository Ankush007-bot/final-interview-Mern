//How would you revert a commit
// git log --oneline
// Example output:

// sql
// Copy code
// a1b2c3d (HEAD -> main, origin/main) Add hello.txt file
// 98e76f5 Initial commit
// Revert the commit

// bash
// Copy code
// git revert a1b2c3d
// This opens your editor with a default message like
// "Revert 'Add hello.txt file'".

// Save & close it.

// Push the new revert commit

// bash
// Copy code
// git push origin main




//REACT HEADING


//suppose flipkart jaisa landing page banana hai jisme products wgrh show ho rhe ho aur bhi baaki cheej to kya
//  approach rehni chahiye ki wo fast load ho ,efficient ho aur leg na akrey

// to build a Flipkart-like landing page, my approach is:

// Use lazy loading and code-splitting to reduce initial bundle load.

// Implement efficient caching and background refetching using React Query or SWR.

// Render product lists using virtual scrolling and infinite scroll to avoid rendering thousands of items at once.

// Optimize images using CDN, compression, and lazy loading.

// Combine static generation for stable content and dynamic fetching for live content.

// Use memoization (React.memo, useMemo, useCallback) to prevent unnecessary renders.

// Add skeleton loaders to provide better UX while data loads.





// How does React’s Diffing Algorithm work?

// React’s Diffing Algorithm is the logic used during reconciliation to quickly find the minimum number of changes between the old Virtual DOM and the new Virtual DOM.
// Because comparing entire trees node-by-node is expensive, React uses optimized heuristics to make it fast.

// 🔍 Key Rules of React’s Diffing Algorithm
// 1️⃣ If the element type changes, React replaces the whole subtree

// Example:

// <div> → <span>


// React assumes everything inside has changed and re-renders that node completely.

// 2️⃣ If the element type is the same, React compares props

// Example:

// <div class="red"> → <div class="blue">


// React only updates the modified attributes instead of replacing the entire node.

// 3️⃣ For lists, React uses keys to track items

// Keys help React understand:

// Which items moved

// Which were added

// Which were removed

// Example:

// [1,2,3] → [2,3,1]


// With proper keys, React reorders instead of destroying and recreating nodes.

// 🚨 If keys are missing or index is used

// React may mistakenly:

// Reuse wrong components

// Lose state

// Cause unnecessary re-renders

// ⚙️ Why is React’s diffing fast?

// Because:

// It does not compare every node deeply

// It uses O(n) heuristics instead of O(n³) (traditional tree diffing)

// It relies on:

// Element type comparison

// Keys in lists

// Depth-first traversal

// ⭐ One-line interview answer

//</div></div>React’s Diffing Algorithm compares the new and old Virtual DOM using optimized rules:
//</span> it replaces entire subtrees if element types differ, shallow-compares props if types match, and uses keys to efficiently track changes in lists, making diffing fast and near O(n)


// What is the Reconciliation Algorithm in React?

// The Reconciliation Algorithm is the process React uses to compare the new Virtual DOM with the previous Virtual DOM and update only the parts of the real DOM that have changed, instead of re-rendering the whole UI.

// ⭐ How it works

// When a component updates:

// React creates a new Virtual DOM tree.

// Compares it with the previous Virtual DOM.

// Finds out what has changed (diffing).

// Updates only the necessary nodes in the real DOM.

// This makes UI updates fast and efficient.


//How do you perform conditional rendering in React?
//You can perform conditional rendering in React by showing UI based on a condition (just like if, else, ternary, etc.).
if (isLoggedIn) {
  return <h1>Welcome User</h1>;
}
return <h1>Please Login</h1>;

<h1>
  {isLoggedIn ? "Welcome User" : "Please Login"}
</h1>

{isAdmin && <button>Delete User</button>}



//How do you handle forms in React?

//In React, forms are usually handled using state to control the input values and update them on every change.
//  This is called a controlled component approach.

function FormExample() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}


//uncontrolled approach
// useRef directly accesses DOM elements (like document.getElementById).

// No useState is needed.

// Form validation is done when submitting.

// This is called an Uncontrolled Component.

import React, { useRef } from "react";

function FormWithRef() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    // Validation
    if (name.length === 0) {
      alert("Name is required");
      nameRef.current.focus();
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Enter a valid email");
      emailRef.current.focus();
      return;
    }

    alert(`Form Submitted Successfully!\nName: ${name}\nEmail: ${email}`);

    // Clear fields
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form Validation using useRef</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          ref={nameRef}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          ref={emailRef}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormWithRef;





//How do you ensure the code quality in your project


//We maintain code quality through code reviews, automated testing, linting, and static analysis.
//  Our CI pipeline blocks deployment if tests or lint checks fail. We also follow standard coding 
// principles and continuous monitoring to ensure the application remains stable and maintainable

// suppose when the first time your user logged in inside your application and it has some data from the
//  login api you have to options to store it in session or you can store it in redux also and you will need 
// that data through your project so which method is preferable

// Authentication tokens or session info → should be stored in session (cookies, localStorage, sessionStorage, etc.).

// UI/state-related user data (like profile, name, role, theme, preferences) → Redux.


// 1️⃣ Authentication Data

// Examples:

// JWT token

// Session ID

// Refresh token

// This data must be:

// ✔ Persisted even after page refresh
// ✔ Secure
// ✔ Accessible for API calls

// So it should NOT go into Redux (because Redux resets on refresh unless persisted using middleware).

// Best Place:

// HttpOnly Cookie (most secure)

// Or localStorage/sessionStorage (less secure but common)






//How routing works in React.js ? If you have multiples roles how will you manage that with routes

// How Routing Works in React.js

// React itself does not include routing.
// We use a library like react-router-dom.

// Routing in React works by:

// The app uses a single HTML page (SPA).

// react-router-dom watches the URL changes.

// Instead of reloading the page, it renders different components based on the URL.


import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</BrowserRouter>


// Managing Multiple Roles in Routing (Role-Based Routing)

// Example roles:
// Admin
// User
// Manager

// We create a wrapper component that:

// ✔ Checks if user is logged in
// ✔ Checks user role
// ✔ Allows or blocks the route

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, role, user }) {
  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role)
    return <Navigate to="/unauthorized" />;

  return element;
}


<Routes>
  {/* Admin only */}
  <Route
    path="/admin"
    element={
      <ProtectedRoute
        element={<AdminPanel />}
        role="admin"
        user={currentUser}
      />
    }
  />

  {/* Normal user */}
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute
        element={<Dashboard />}
        user={currentUser}
      />
    }
  />
</Routes>



//What are middlewares in next.js
// Middlewares in Next.js are functions that run before a request is completed, allowing you to intercept
//  and modify requests and responses at the edge (closest to the user) without hitting the server fully.

// Key points:

// Defined in a middleware.js or middleware.ts file at the root or in specific directories.

// Run on every request matching the middleware path.

// Useful for:

// Authentication & access control

// Redirects & rewrites

// Logging

// Header or cookie manipulation

// Executed on the Edge Runtime, meaning faster and lower latency.

// Example:
// // middleware.js
// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const isLoggedIn = req.cookies.get("token");

//   if (!isLoggedIn) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }


// In short: Middleware in Next.js lets you handle logic like auth checks or redirects before rendering pages, improving performance and security.


//what is key in REACT why it is important
//What’s the purpose of keys in lists?

// A key in React is a special attribute used in lists to help React identify which items have changed,
//  been added, or removed. It is essential for improving performance and ensuring the efficient rendering of list elements.

// Why Are Keys Important?
// React uses keys to track and manage elements efficiently during the reconciliation process.
// Without keys, React would re-render the entire list whenever there’s a change. With keys,
// React can optimize updates by identifying the specific elements that changed.
// How Keys Work
// Each element in a list should have a unique key.
// React uses these keys to compare elements between renders and determine:
// Which elements need to be updated
// Which need to be removed
// Which need to be added

//LIFE CYCLE METHOD REACT

//The component lifecycle in React refers to the sequence of events that occur from the creation of a component to its removal from the DOM. React components go through several stages in their lifecycle: mounting, updating, and unmounting. React provides specific lifecycle methods (in class components) and hooks (in functional components) to control behavior during these stages.


// componentDidMount():

// Runs after the component is rendered in the DOM.
// Commonly used for API calls, subscriptions, or DOM manipulations.

//useEffect(() => {...}, []): Acts like componentDidMount.



// componentDidUpdate(prevProps, prevState, snapshot):

// Runs after the DOM has been updated.
// Useful for operations like fetching new data or DOM updates.
// Functional Components:
// Hooks:
// useEffect(() => {...}, [dependencies]): Acts like componentDidUpdate when dependencies change.




// componentWillUnmount():
// Runs before the component is destroyed.
// Used for cleanup, such as canceling API calls, removing subscriptions, or clearing timers.
// Functional Components:
// Hooks:
// useEffect(() => {...; return cleanup}, []): Cleanup function simulates componentWillUnmount.


// 1. componentDidMount()
// When it runs: After the component has been rendered to the DOM for the first time.
// Use case: Ideal for fetching data, initializing subscriptions, or starting timers.
// Example:
// jsx
// Copy code
// componentDidMount() {
//   fetch("https://api.example.com/data")
//     .then(response => response.json())
//     .then(data => this.setState({ data }));
// }
// 2. componentDidUpdate(prevProps, prevState)
// When it runs: After the component has re-rendered due to a change in props or state.
// Use case: Perform operations that depend on the updated state or props, like fetching new data when props change.
// Example:
// jsx
// Copy code
// componentDidUpdate(prevProps) {
//   if (prevProps.id !== this.props.id) {
//     this.fetchNewData(this.props.id);
//   }
// }
// 3. componentWillUnmount()
// When it runs: Right before the component is removed from the DOM.
// Use case: Clean up operations like unsubscribing from events, canceling network requests, or clearing timers.
// Example:
// jsx
// Copy code
// componentWillUnmount() {
//   clearInterval(this.timer);
// }
// These methods allow you to control a component's behavior at different stages of its lifecycle. For functional components,
//  similar functionality can be achieved using the useEffect hook.


//shouldComponentUpdate
// This is also a class lifecycle method that decides whether the component should re-render or not.

// Default behavior → returns true.
// shouldComponentUpdate(nextProps, nextState) {
//   return nextProps.count !== this.props.count;
// }

//LAZY LOADING

// What is Lazy Loading?
// Lazy loading is a design pattern where components, data, or assets are loaded only when they are needed.
//  In React, this usually means loading components dynamically rather than all at once when the app initializes.

// Benefits of Lazy Loading
// Reduces the initial bundle size.
// Speeds up the initial load time of the application.
// Improves performance, especially for large apps.


// React Implementation of Lazy Loading
// React provides the React.lazy function to enable lazy loading of components. It works with Suspense to display
// fallback content while the component is being loaded.
//suspense React ka built-in component hai jo lazy-loaded components ke load hone tak fallback UI dikhane ke kaam 
// aata hai.
import React, { Suspense } from "react";

// Lazy loading the component
// const LazyComponent = React.lazy(() => import("./LazyComponent"));

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome!</h1>
//       {/* Suspense handles the loading state */}
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// };

// export default App;
// React.lazy dynamically imports the LazyComponent only when it is needed.
// Suspense displays a fallback (e.g., "Loading...") while the component is being loaded.



//REDUX
// Redux is an independent state management library

// Key Features of Redux:
// Centralized State: All application state is stored in a single store.
// Predictable State Updates: State changes are handled by pure functions called reducers.
// Unidirectional Data Flow: State flows in one direction, making the application logic easier to understand


// How Redux Works:
// Store: Holds the application's state.
// Actions: Plain JavaScript objects that describe what changes should occur (e.g., { type: 'INCREMENT' }).
// Reducers: Pure functions that take the current state and an action, and return the updated state
// combine reducer:  it contains all the reducer which we used in our application

// # NPM
//npm install redux react-redux


// make a file store.js inside src/app/store.js

//import {createStore,combineReducers } from 'redux'   in store.js file


// import {createStore,combineReducers } from 'redux'

// const reducer= combineReducers({
// // contains all the reducers
//cmn: cmn,

// })
// const initialState={}

// const store = createStore({
//      reducer,
//      initialState
// })

// now we have to wrap the provider into our application in index.js   , it makes  redux store to available throghout our app

// create reducer file with any name in which you have written your reducer function

// step 1

// let initialState = {
//     memberData: [],
// };

// function cmn(state = initialState, action) {
//     switch (action.type) {
//         case 'memberData':
//             return {
//                 ...state,
//                 memberData: _.cloneDeep(action.payload),
//             };

//         default:
//             return state;
//     }
// }

// export default cmn;

// NEXT STEP

// import cmn from './cmn'

// const rootReducer= combineReducers({
// // contains all the reducers
// cmn: cmn,
// })
// const initialState={}

//  const store = configureStore({
//     reducer: rootReducer,

// })


//what is React.StrictMode
// React.StrictMode is a development-only tool that helps detect bugs, unsafe lifecycles, side effects, 
// and deprecated APIs. It runs components twice (dev mode only) to highlight issues.


//When should you use Context over Redux?
// “I use Context only for simple global state to avoid prop drilling.
// But for complex state, frequent updates, or multi-step logic, Redux is a better and more scalable choice.”



//Explain how redux-thunk works.

// redux-thunk lets you write async logic in Redux by allowing actions to return functions instead of objects.
// The middleware intercepts these functions, runs them, and dispatches real actions after async work completes.

// You click a button → fetch data from API → then update store
// This is async, and Redux alone cannot wait for it.


// WITHOUT THUNK — async banaya → ERROR aayega

// Redux plain objects expect karta hai, isliye async call karte hi action “promise” ban jayega → crash.

// Code (GALAT, error throw karega) 👇
async function setUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    dispatch({
      type: "SET_USERS",
      payload: data
    });

  } catch (err) {
    dispatch({
      type: "SET_USERS_ERROR",
      payload: err
    });
  }
}

//Call:
setUsers();

// ❌ Why error?

// Redux me dispatch sirf plain object expect karta hai

// Par async function promise return karta hai

// Redux promise ko action nahi mana → ERROR: Actions must be plain objects

// redux-thunk solves this.

// 2. Redux WITH Thunk (async allowed)

// With redux-thunk, you can dispatch a function that runs async code.

// 🔥 Action Creator
// // actions.js

// ✔ Correct thunk logic:

//  **Thunk tabhi kaam karta hai jab tum dispatch(fetchUsers()) karo.
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "USERS_LOADING" });

    try {
      const res = await fetch("https://api.example.com/users");
      const data = await res.json();

      dispatch({
        type: "USERS_SUCCESS",
        payload: data,
      });

    } catch (error) {
      dispatch({
        type: "USERS_ERROR",
        payload: error,
      });
    }
  };
};

// ✔ Call like this:
dispatch(fetchUsers());


 function setUsers(){
       users=['asdas','asdwas','asdwas','aswdas'] 
       
       dispatch({type:'users',payload:users})
}







//How to debug a Redux app?
// “I debug a Redux app using Redux DevTools to inspect dispatched actions, state transitions,
//  and time-travel debugging. I also add logs in reducers and actions to verify payloads, and I
//   validate that combineReducers keys, selectors, and dispatch calls are correct. For async issues,
//    I check middleware like thunk and inspect API calls in the network tab. Most bugs are due to incorrect state 
//    paths, wrong action types, or state mutation.”



//How to handle dynamic routing in Next.js?

// Dynamic Routes
// Defining a Dynamic Route
// Create a file with square brackets in the pages/ directory:

// javascript
// Copy code
// // pages/post/[id].js
// import { useRouter } from "next/router";

// export default function Post() {
//   const router = useRouter();
//   const { id } = router.query;

//   return <h1>Post ID: {id}</h1>;
// }
// Navigating to a Dynamic Route
// javascript
// Copy code
// router.push(`/post/${postId}`);



//What is the Redux data flow (step-by-step)?

// Actions are plain objects: { type, payload }.

// Reducers are pure and synchronous. Async work belongs to middleware (thunk/saga).

// Immutability is critical — mutate leads to bugs and missed re-renders.

// Selectors read derived data from state; memoize heavy selectors (reselect).

// Time-travel debugging possible because state transitions are predictable and pure.

  //Component calls dispatch(action) to send it into the Redux system.
     //dispatch(addTodo("Buy milk"));
       //An action is sent in  a plain JS object that describes what happened.
         //const addTodo = (text) => ({ type: "ADD_TODO", payload: text });
           //Reducers receive (state, action) and return new state (must be pure, no mutations)
             //Redux store replaces the old state with the reducer’s returned state and notifies 
               // subscribers (React-Redux connect/useSelector re-renders components that read changed slices).


//Explain how createSlice works in Redux Toolkit.
// createSlice simplifies Redux by combining action creators and reducers into one place. You define the slice name, 
// initial state, and reducer functions, and Redux Toolkit automatically generates the action types and action creators 
// for you.


// With createSlice:

// No action types

// No action creators

// No switch-case

// Mutating code allowed

// Actions auto-generated

// Reducer auto-generated

// Without createSlice:

// Manually write action types

// Manually write action creators

// Manually write reducer switch-case

// Must write immutable updates

// More boilerplate


//What is React.PureComponent?
// “PureComponent is a class component that prevents unnecessary re-renders by doing a shallow comparison of props 
// and state.
//  If nothing changed, it skips re-render. It’s basically a built-in performance optimization.”


//How to reduce bundle size?
//Code Splitting / Lazy Loading
//Use React.lazy + dynamic imports so only required components load.

//Image optimization
//ssr/csr use properly


//NODE


//ANSWERS

//what is n+1 problem in DB

// inside a loop, you run N more SQL queries.
// This leads to N+1 total queries.

for (const user of users) {
  user.posts = await db.query(
    `SELECT * FROM posts WHERE userId = ${user.id}`
  );
}
// ➡️ 1 query for users
// ➡️ N (number of users) queries for posts

// Total = N + 1 queries

// If there are 500 users → 501 queries!

// This is the N+1 problem.

//FIXED
// const result = await db.query(`
//   SELECT users.id AS userId, users.name,
//          posts.id AS postId, posts.title
//   FROM users
//   LEFT JOIN posts ON posts.userId = users.id
// `);

//Fetch all posts with one query
// SELECT * FROM posts WHERE userId IN (1,2,
// 3,4,...);


// Backend:

const userIds = users.map(u => u.id);
const posts = await db.query(`
  SELECT * FROM posts WHERE userId IN (${userIds.join(",")})
`);

//HOW TO IMPLEMENT LOAD BALANCING IN NODE JS APPLICATION
// Load balancing in Node.js can be implemented in 4 ways:

// Cluster module – uses multiple CPU cores inside one machine.

// NGINX reverse proxy – distributes requests to multiple Node instances.

// PM2 cluster mode – simplest production load balancing.

// Cloud load balancers – AWS ELB, GCP LB, Azure LB.




// 🔥 What is a Reverse Proxy? (Very Simple Definition)

// A reverse proxy is a server that sits in front of your backend servers and receives all client requests first.

// User → Reverse Proxy → Your Backend (Node.js)

// It hides your backend and forwards the request internally.


// A normal proxy protects clients

// A reverse proxy protects servers

// Production me kaise hota hai?

// Production systems me manually multiple servers run nahi karte.
// PM2 or Docker se hota hai.

//pm2 start app.js -i 4

// This creates 4 Node processes automatically.

// Then NGINX does load balancing.



//✅LOAD BALANCING WITH DOCKER AND NGINX



// 1. First, I create a Docker image of my Node.js application.
// This makes the app portable and easy to deploy anywhere.

// 2. Then I push the Docker image to Docker Hub (or any container registry).
// So the production server can pull the same image.

// 3. On the production server, I run multiple containers from that image.
// Each container runs on a different port (e.g., 3001, 3002, 3003).

// 4. After that, I configure NGINX as a reverse proxy + load balancer.
// NGINX receives all incoming requests and distributes them across the multiple containers.

// 5. This setup helps the application handle high traffic.
// Traffic gets divided, improving performance and reliability.

// 6. If one container goes down, the remaining containers still handle the requests.
// This gives fault tolerance and better uptime.






// Difference between Axios and Fetch
// Fetch

// Browser ka inbuilt function hai (no installation needed).

// 400/500 status ko error nahi maanta (khud check karna padta hai).

// JSON parse karne ke liye res.json() manually call karna hota hai.

// Interceptors nahi hote.

// Default timeout nahi hota.


// Axios

// Third-party library (install karna padta hai).

// 400/500 status codes ko automatic error throw karta hai.

// Response already JSON parsed milta hai (no res.json()).

// Interceptors milte hain (auth token injection, logging etc).

// Timeout support built-in hota hai.

// Request cancel, upload progress, etc ka extra features deta hai.


//Route parameters vs Query parameters difference?

//npm vs npx

// ✅ npm vs npx – Simple Difference
// 🔵 npm (Node Package Manager)

// ✔ npm installs packages
// ✔ Packages go into node_modules folder
// ✔ You use installed packages later

// Example:
// npm install react
// npm install -g create-react-app

// 🟢 npx (Node Package Execute)

// ✔ npx runs a package without installing it
// ✔ Package not saved in node_modules
// ✔ Perfect for one-time commands

// Example:
// npx create-react-app myapp


// 🔥 Practical Example
// npm way
// npm install -g create-react-app
// create-react-app myapp


// You need to install before running.

// npx way
// npx create-react-app myapp


// You run directly, no installation required.

// 👉 This runs create-react-app without installing it globally.

//COOKIES
// 1️⃣ httpOnly: true
// res.cookie("sessionId", token, { httpOnly: true });

// What it means

// This cookie cannot be accessed by JavaScript (document.cookie).

// Browser will store it normally, but JavaScript cannot read or write it.

// Why it is important

// Protects the session from XSS attacks.

// Even if someone injects JS like:

// alert(document.cookie);


// They cannot read this cookie.

// One-Liner:

// httpOnly protects cookies from being stolen by malicious JavaScript.

// 2️⃣ secure: true
// res.cookie("sessionId", token, { secure: true });

// What it means

// Cookie will only be sent over HTTPS, never HTTP.

// Why it is important

// Prevents session token from being leaked on insecure network traffic.

// Without this, someone on the same Wi-Fi can steal your cookies.

// One-Liner:

// secure ensures cookie is only transmitted on encrypted HTTPS traffic.

// Together (Best Practice)
// res.cookie("sessionId", token, {
//   httpOnly: true,
//   secure: true
// });


// Means:

// Even if hacker runs malicious JS → he can’t read the cookie

// Even if network is being monitored → cookie can’t be sniffed

// When they are used

// They are used in session-based login (JWT or normal sessions) to prevent:

// Cookie theft

// Session hijacking

// XSS attacks

// Network sniffing






// What is PM2?

// PM2 is a production process manager for Node.js applications.
// It helps you:

// Keep your Node.js app always running

// Automatically restart the app if it crashes

// Run multiple apps easily

// Monitor logs, CPU, memory usage

// Manage clustering (for load balancing)









//How do you avoid SQL injection Risk?

//Use Parameterized / Prepared Statements
//db.query(`SELECT * FROM users WHERE email = '${email}'`);
//db.query("SELECT * FROM users WHERE email = $1", [email]);

// attackers can send  email = '; DROP TABLE users; -

//Final query becomes: 
// SELECT * FROM users WHERE email = '';DROP TABLE users; '

//This could delete the entire users table




// res.send()

// Sends a response to the client

// Can send string, object, HTML, buffer, etc.

// Automatically sets content type based on data


// 2️⃣ res.json()

// Sends a JSON response

// Automatically sets header → Content-Type: application/json

// Used when sending APIs responses

// Example:


// 3️⃣ res.render()

// Used when working with templating engines like:

// EJS

// Pug

// Handlebars

// Renders an HTML page from a template










//what are microservices how would you use in your project

// Microservices is an architecture where your application is broken into small independent services,
//  instead of one big monolithic backend.

// Each service:

// Runs independently

// Has its own database (optional but recommended)



// Monolithic vs Microservices

// /Monolithic
// Backend/
//  ├─ Auth
//  ├─ Users
//  ├─ Orders
//  ├─ Payments
//  ├─ Products

// All in one big codebase, one server, one database.

// If traffic increases in "Orders", you have to scale the whole server.


//🟢 Microservices

// Auth Service
// User Service
// Order Service
// Payment Service
// Product Service

//Each service is a separate Node.js application with its own deployment and database.


//How to Use Microservices in Node.js Project

// 2️⃣ Each Service is a Separate Node.js App

// auth-service/index.js

// const express = require("express");
// const app = express();

// app.post("/login", (req, res) => {
//   res.json({ message: "Login successful" });
// });

// app.listen(3001, () => console.log("Auth service running on 3001"));



//product-service/index.js

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// // SAMPLE PRODUCT DATA
// let products = [
//   { id: 1, name: "iPhone 15", price: 1200 },
//   { id: 2, name: "MacBook Pro", price: 2500 },
//   { id: 3, name: "AirPods Pro", price: 250 },
// ];

// // GET ALL PRODUCTS
// app.get("/products", (req, res) => {
//   res.json({
//     success: true,
//     data: products,
//   });
// });

// // ADD NEW PRODUCT
// app.post("/products", (req, res) => {
//   const newProduct = {
//     id: products.length + 1,
//     name: req.body.name,
//     price: req.body.price,
//   };

//   products.push(newProduct);

//   res.json({
//     success: true,
//     message: "Product added successfully",
//     data: newProduct,
//   });
// });

// // SERVER START
// app.listen(3002, () => {
//   console.log("Product Service running on port 3002");
// });

//http://localhost:3002/products



// One service calls another using fetch / axios:

// axios.get("http://product-service:3002/products")





// 🚀 Microservices Communication

// Microservices ek dusre se baat karte hain.
// Iske do tareeke hote hain:

// A) HTTP (REST)

// Service A → directly call → Service B

// Synchronous (iska reply aane tak wait karna padta hai)

// Example: axios, fetch

// Problem:

// Agar Service B down ho jaye, to Service A bhi fail.


// Working:

// Service A → Message broker me message publish karti hai

// Service B → broker se message consume karta hai

// Service A ko ye nahi pata hota:

// Service B chal rahi hai ya nahi

// B kitne servers pe chal rahi hai

// Message turant consume hoga ya baad me



//KAFKA

// 🎯 Scenario: Real Microservices Project

// Man lo tum ek large e-commerce backend bana rahe ho.

// Microservices:

// auth-service
// order-service
// payment-service
// email-service
// notification-service


// Ab user ne app me order place kiya.

// Pehle socho bina Kafka ke kya hota hai.



// ❌ Without Kafka (REST direct calls)

// order-service ko:

// payment-service ko call karna padega

// email-service ko call karna padega

// notification-service ko call karna padega

// Example
// await axios.post("http://payment-service/pay", order);
// await axios.post("http://email-service/send", order);
// await axios.post("http://notification-service/push", order);


// Problems:

// ❌ Services tightly coupled
// ❌ Agar payment-service down → whole order flow fail
// ❌ Scaling difficult
// ❌ Code messy
// ❌ New service add karne me modification required




// Order-service kisi ko directly call hi nahi karega.
// Woh sirf Kafka ko message dega:

// "new_order_created"


// Baaki services Kafka se message read karengi.

// payment-service

// email-service

// notification-service

// All will receive the same message.

// Order-service ko pata bhi nahi kisi service ka address, na ye ki wo active hain.



// 1️⃣ Order-Service (Producer)

// User place order:

// {
//   orderId: 22,
//   userId: 10,
//   amount: 3000
// }


// Order-service Bas Kafka ko message bhej deta:

// Order created event published


// No calling other services.




// 2️⃣ Payment-Service (Consumer)

// Payment service Kafka se message sun raha hota:

// Oh new order created
// → start payment


// Agar payment-service down hai?

// Kafka message store rakhta

// Jab service wapas uthegi, message consume kar legi

// Order flow fail nahi hoga.



// 3️⃣ Email-Service (Consumer)

// Kafka se message read:

// Order created → send order confirmation email

// 4️⃣ Notification-Service (Consumer)

// Kafka se message read:

// Order placed → send push notification






//what is eventEmitter in node.js

//It allows different parts of an application to communicate with events, instead of calling functions directly.
// Emit (trigger) events

// Listen for events and run callbacks when they occur
//instead of calling functions directly, you emit an event, and whatever is listening to that event will execute.

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// // Listener
// emitter.on("orderPlaced", (id) => {
//   console.log(`Order received with id ${id}`);
// });

// // Emit event
// emitter.emit("orderPlaced", 101);


//BENEFITS

emitter.on("userRegistered", sendEmail);
emitter.on("userRegistered", sendSMS);

//Jab bhi userRegistered event hoga dono function call honge

emitter.emit("userRegistered", "Rahul");
// will run internally

sendEmail("Rahul");
sendSMS("Rahul");

// Agar hum eventEmitter use nhi kartey to hume function kch is tarh likhna pdega

function registerUser() {
  sendEmail();
  sendSMS();
}


// Isme tightly linked code hai
// Agar SMS remove karna hai → code modify karna padega.


emitter.emit("userRegistered");
// Aur SMS hata diya to bas on() wali line hatani padegi.
// Main code untouched.

emitter.on("userRegistered", sendSMS); // y line hatani padegi bas



//what is memory leake in node.js

// Jab application memory (RAM) use to karta rahe,
// lekin free/release na kare,
// aur RAM time ke saath bharhti rahe.


//When an application keeps using more and more memory (RAM) but does not release it back, 
// causing the memory usage to continuously increase over time.

const EventEmitter = require("events");
const emitter = new EventEmitter();

function logUser() {
  console.log("User logged.");
}

setInterval(() => {
  emitter.on("login", logUser);   // Listener keeps increasing!
  emitter.emit("login");
}, 1000);


// Har 1 second me naya event listener add ho raha hai

// 1 minute baad → 60 listeners ho gaye

// Memory keeps increasing

// Eventually Node warning:


//FIX

emitter.once("login", logUser);
//once() ek baar chalta hai aur automatically remove ho jata.

emitter.on("login", logUser);

setInterval(() => {
  emitter.emit("login");
  emitter.removeListener("login", logUser);
}, 1000);


//ANOTHER EXAMPLE OF MEMORY LEAKE
let logs = [];

setInterval(() => {
  logs.push("New log");
  console.log("Log added", logs.length);
}, 1000);


// Har 1 second me "New log" array me add ho raha hai
// Array kabhi empty nahi ho raha
// 1 minute → 60 entries
// 1 hour → 3600
// 2–3 ghante → memory bhar jaye

//logs time ke saath banta rehta hai aur kabhi clear nahi hota this is memory leake


// ✔ Fix Example

// Option 1: Clear old logs

// let logs = [];

// setInterval(() => {
//   logs.push("New log");
//   if (logs.length > 100) {
//     logs = [];    // reset
//   }
//   console.log("Log added", logs.length);
// }, 1000);


// Yahaan:
// Array 100 items ke baad reset ho raha hai
// Memory leak nahi hoga





// 9. List out some global objects in Node.js.
// global

// process

// console

// Buffer

// __dirname

// __filename

// setTimeout

// setInterval

// setImmediate

//4: How does require() differ from import in Node.js?

// "require() is from CommonJS, it loads modules synchronously at runtime and allows dynamic imports.
//module.exports or exports is used.
// module.exports = function add(a, b) { return a + b; };
// const add = require("./add");



// import is from ES Modules, it’s statically analyzed, asynchronous, must be at the top level, and is 
// the modern standard in Node.js and frontend projects."
//Used in modern JavaScript & Node.js (with "type": "module" in package.json).
// Uses export / export default.
// Example:
// export default function add(a, b) { return a + b; }
// import add from "./add.js";






// 6: How does Node.js handle multiple requests if it is single-threaded? 
// "Node.js is single-threaded for JavaScript execution, but it handles multiple requests using the event loop and non-blocking I/O. 
// Long-running tasks are offloaded to the libuv thread pool or system, and when they’re done, the event loop picks up the callback, 
// allowing Node.js to serve thousands of concurrent requests without blocking."

  
//19. Difference between worker threads and child process
// Worker Threads:

// Worker threads run in the same process as the main thread, but in separate threads (like multiple workers in a multi-threaded environment).

// Memory Sharing: Workers can share memory with the main thread through SharedArrayBuffer (optional). This allows for more efficient data exchange.

// Ideal for: CPU-bound tasks, where you need to offload heavy computation without blocking the main thread.

// Child Processes:

// A child process is a completely separate process spawned from the main Node.js process.

// Memory Isolation: Each child process has its own memory space and cannot share memory directly with the parent process.

// Ideal for: Running external commands, scripts, or for parallelism where complete isolation of processes is required.

// Use Cases:

// Worker Threads:

// Ideal for CPU-bound tasks that need to be parallelized without blocking the main event loop (e.g., complex calculations, image processing, data transformations).

// Helps improve performance for real-time applications by offloading work from the main thread.

// Child Processes:

// Ideal for I/O-bound tasks like running shell commands, external scripts, or managing multiple independent processes.

// Used when you need complete isolation between processes, like running a separate application or interacting with other services.





//22 How can you jump from one middleware to another, skipping some?
// First route
// app.get("/test", 
//   (req, res, next) => {
//     console.log("M1");
//     next("route"); // special keyword
//   }, 
//   (req, res) => {
//     console.log("M2 - skipped");
//     res.send("from route 1");
//   }
// );

// // Second route (same path)
// app.get("/test", (req, res) => {
//   console.log("M3");
//   res.send("from route 2");
// });






//25: How do you handle file uploads in Node.js (multer vs streams)?
In Node.js, handling file uploads usually involves receiving binary data (multipart/form-data) sent from a client (like a browser or API consumer).
There are two main approaches:

Using a library like Multer

Using native Node.js streams (or frameworks built on top of them)

🧰 2. Using Multer (Middleware-Based Approach)

What it is:
Multer is a middleware for Express.js that simplifies handling multipart/form-data — the encoding used for file uploads.

How it works:

It parses incoming form data.

Temporarily stores uploaded files either in memory or on disk.

Makes the files accessible on req.file or req.files.

Example:

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // file info
  res.send('File uploaded successfully');
});


Pros:

Very easy to set up.

Works seamlessly with Express.

Handles parsing and storage automatically.

Cons:

Not ideal for very large files — files are fully written to disk or memory before processing.

Less control over the upload stream.

Harder to integrate with cloud storage (e.g., S3) directly.

🌊 3. Using Streams (Low-Level Approach)

What it is:
Node.js has a built-in stream API that allows you to process data chunks as they arrive, without loading the entire file into memory.

How it works:

You read the file upload stream from the request (req).

You can pipe it directly to a file, a database, or a cloud service.

Example:

const fs = require('fs');
const express = require('express');
const app = express();

app.post('/upload', (req, res) => {
  const writeStream = fs.createWriteStream('./uploads/uploaded-file');
  req.pipe(writeStream);

  req.on('end', () => res.send('File uploaded using streams'));
});


Pros:

Excellent for large files — no buffering in memory.

Gives full control over the upload process.

Ideal for cloud uploads, data transformations, or chunked uploads.

Cons:

More complex to implement and manage errors.

You have to handle multipart form parsing manually or with libraries like busboy, formidable, or multiparty.


//MULTER
// 🔹 Step 1: Install Multer

// Terminal me likho 👇

// npm install multer

// 🔹 Step 2: Import aur Basic Setup
const express = require('express');
const multer = require('multer');
const app = express();

// 🔹 Step 3: Storage Define Karna

// Multer ko batana padta hai ki file kahan aur kis naam se save karni hai.
// Uske liye hum storage engine define karte hain 👇

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 'uploads' folder me file save hogi
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

// 🔹 Step 4: Multer Middleware Banana
// const upload = multer({ storage: storage });


// Ye middleware ab file uploads handle karega.

// 🔹 Step 5: Upload Route Banana
// ✅ Single file upload
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // file info
  res.send('File uploaded successfully!');
});


// upload.single('file') → form ke input field ka name="file" hona chahiye.

// req.file me uploaded file ka detail milta hai.

//✅ Multiple file upload
app.post('/uploads', upload.array('files', 5), (req, res) => {
  console.log(req.files); // array of files
  res.send('Multiple files uploaded!');
});


// Yahaan max 5 files ek saath upload kar sakte ho.

// 🔹 Step 6: Frontend / Postman se test karo

// Agar tum HTML form se test karna chahte ho 👇

<form action="http://localhost:3000/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="file" />
  <button type="submit">Upload</button>
</form>


// Important:

// Form me enctype="multipart/form-data" hona zaroori hai.

// Input ka name="file" hona chahiye (kyunki backend me humne upload.single('file') likha hai).

// Jab hum normal JSON ya form data bhejte hain, tab Express middleware (express.json() ya express.urlencoded()) 
// poora request body read karke usse parse karta hai aur req.body me store kar deta hai. Lekin jab hum file upload karte
//  hain (using multipart/form-data), tab request body me binary data aata hai, na ki readable text, isliye Express usse 
//  req.body me parse nahi karta. File upload ke case me hum req ko ek Readable Stream ke tarah treat karte hain, jisme 
//  file ka data chunks me aata hai. Hum us stream ko directly kisi Writable Stream (jaise fs.createWriteStream()) ke saath
//   connect (req.pipe(fileStream)) karke file me likh dete hain. Is tarah hum bina pura file memory me load kiye upload kar
//    sakte hain. Agar hume file ke saath form fields bhi handle karne hain (jaise name, email + file), to hume multer, 
//    busboy, ya formidable jaisi libraries ka use karna padta hai, jo file aur fields dono ko alag-alag parse kar deti 
//    hain.






// 27.How to secure your express app
// Enable HTTPS for encrypted communication.

// Use Helmet to set security-related HTTP headers.

// Configure CORS to control which domains can access your API.

// Sanitize and validate input to prevent injection attacks.

// Implement authentication (e.g., JWT) and authorization mechanisms.

// Use rate limiting to prevent DDoS or brute-force attacks.

// Hash passwords securely using bcrypt.

// Protect sensitive data (e.g., API keys, DB credentials) using environment variables.

// Prevent XSS attacks by sanitizing user inputs.

// Log errors securely and handle exceptions properly.




//HALMET
//Helmet is a middleware for Express.js that helps secure your application by setting various HTTP headers. 
// These headers can protect your app from common security vulnerabilities such as Cross-Site Scripting (XSS),
//  Clickjacking, and Man-in-the-Middle (MITM) attacks. By using Helmet, you can prevent attackers from exploiting
//  certain vulnerabilities related to HTTP headers.

// How Does Helmet Work?

// Helmet sets several HTTP headers for you. Some of the key headers are:

// Content Security Policy (CSP): Helps mitigate XSS attacks by specifying which domains are allowed to load resources.

// Strict-Transport-Security (HSTS): Enforces the use of HTTPS, preventing attacks that downgrade a connection to HTTP.

// X-Frame-Options: Prevents clickjacking by disallowing your app from being embedded in an iframe.

// X-XSS-Protection: Enables cross-site scripting (XSS) filtering in supported browsers.

// X-Content-Type-Options: Prevents browsers from interpreting files as a different MIME type 
// (protects against MIME sniffing).

// How to Use Helmet in an Express App

// Install Helmet:
// First, install the helmet package using npm.

// npm install helmet


// Include and Use Helmet:
// After installing it, you can use it as middleware in your Express application.

// const express = require('express');
// const helmet = require('helmet');

// const app = express();

// // Use helmet to set security headers
// app.use(helmet());

// app.get('/', (req, res) => {
//   res.send('Hello, secure world!');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


// By calling app.use(helmet()), you automatically apply all of Helmet’s default security headers to your app.




//36.How do you scale a Node.js application using the cluster module?

// The cluster module in Node.js allows you to create child processes (workers) that share the same server port,
//  enabling multi-core utilization. Since Node.js is single-threaded, using clusters helps to make full use of
//  multi-core systems for better performance and scalability.

// How it works:

// Master process manages the worker processes.

// Each worker is a separate instance of the Node.js event loop.

// The master process can distribute incoming requests to the workers.

// Usage:

// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   // Fork workers for each CPU core
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//   });
// } else {
//   // Worker processes handling requests
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('Hello from Worker!');
//   }).listen(8000);
// }


// Benefits:

// Better performance on multi-core systems.

// Fault tolerance: If a worker crashes, the master process can respawn it.

// Drawback: The workers are separate processes, so you need to manage shared state (e.g., through a database or Redis).



//37: What is a worker thread? How does it handle CPU-intensive tasks?

// The worker_threads module in Node.js provides a way to run JavaScript code in multiple threads. 
// This allows you to execute CPU-intensive tasks in parallel without blocking the main event loop,
//  which is single-threaded. Worker threads run in their own isolated execution context but share memory with
//  the main thread, allowing them to communicate using messages.

// How Does It Handle CPU-Intensive Tasks?

// Main Thread (Event Loop): Node.js, by default, operates on a single thread (main thread).
//  If you perform CPU-heavy operations on the main thread, it can block the event loop, which delays or
//  prevents handling other asynchronous tasks (like HTTP requests).

// Worker Threads: By offloading CPU-intensive tasks (such as complex calculations, image processing, or data crunching)
//  to a worker thread, the main thread can continue to handle I/O operations (like serving web requests or 
// responding to events) without getting blocked.

// How it works: The main thread creates a worker thread, which performs a task asynchronously. 
// The worker sends the result back to the main thread using message-passing.

// Example of offloading CPU-intensive task:

// const { Worker, isMainThread, parentPort } = require('worker_threads');

// if (isMainThread) {
//   // Main thread: Creating the worker
//   const worker = new Worker(__filename); // Using the same file for worker script
//   worker.on('message', (result) => {
//     console.log('Result from worker:', result); // Handling worker result
//   });
//   worker.postMessage('Start CPU-intensive task'); // Sending data to worker
// } else {
//   // Worker thread: Performing CPU-intensive task
//   parentPort.on('message', (message) => {
//     // Simulate a CPU-heavy task
//     let result = 0;
//     for (let i = 0; i < 1e9; i++) result += i;
//     parentPort.postMessage(result); // Returning the result back to main thread
//   });
// }


// Benefits:

// Non-blocking: The worker thread offloads CPU work, allowing the main thread to keep processing other I/O tasks.

// Improved Performance: CPU-intensive operations are parallelized across multiple threads, which makes use of multi-core processors.

// How it handles CPU tasks:

// Parallel execution: CPU-bound tasks are executed in parallel with the main thread.

// Avoids event loop blocking: CPU-intensive work in worker threads prevents the main event loop from being blocked, which improves overall performance, especially for real-time applications.

// When to Use Worker Threads?

// You should use worker threads when:

// You need to parallelize heavy computations that would normally block the event loop (e.g., data processing, image/video processing, mathematical calculations).

// You're working with real-time applications that can't afford to be blocked by CPU-intensive tasks.



//40: How can we improve the performance of a Node.js application?

// 1. Optimize Code Efficiency

// Asynchronous I/O: Node.js is built for non-blocking, event-driven architecture. Make sure that all I/O operations (such as file reading, database queries, etc.) are asynchronous.

// Use Streams: When dealing with large amounts of data, use streams instead of loading everything into memory at once. This reduces memory usage and prevents blocking.

// Avoid Synchronous Code: Minimize the use of synchronous methods (like fs.readFileSync(), JSON.parse()) in the main event loop as they block the event loop, which impacts performance.

// Minimize Function Calls in Loops: Avoid unnecessary function calls inside tight loops or heavy computation code.

// 2. Efficient Database Interaction

// Database Indexing: Ensure that your database is properly indexed based on the queries you frequently perform. This reduces query time and improves response speed.

// Connection Pooling: Use database connection pooling (especially for relational databases like PostgreSQL or MySQL) to avoid the overhead of constantly creating and destroying connections.

// Optimized Queries: Write efficient queries, avoid unnecessary joins, and minimize data transfer by selecting only the required fields.

// 3. Load Balancing

// Cluster Mode: Node.js runs on a single thread, so utilizing multiple CPU cores is essential. Use the cluster module to spawn child processes that can share the same server port, effectively distributing the load across multiple CPU cores.

// Reverse Proxy (Nginx or HAProxy): Use a reverse proxy like Nginx in front of your Node.js app to handle load balancing, caching, SSL termination, and other optimizations.

// 4. Caching

// In-Memory Caching: Use in-memory caches like Redis or Memcached for storing frequently accessed data. This reduces the need for repeated database calls and speeds up the application.

// HTTP Caching: Use HTTP headers like Cache-Control, ETag, and Last-Modified to cache static assets, reducing the load on your server.

// Query Caching: Cache the results of frequently executed database queries, especially if the data doesn’t change often.

// 5. Optimize Node.js and V8 Engine Performance

// Enable Garbage Collection Tuning: The V8 engine has a garbage collector that may pause your application temporarily. You can fine-tune its behavior using flags like --max-old-space-size (to increase memory allocation) or --gc-interval (to control the frequency of garbage collection).

// V8 Optimizations: Regularly monitor your app for memory leaks and reduce memory overhead by freeing unused objects. Tools like heap snapshots and Node.js profiling can help identify memory leaks.

// 6. Use Content Delivery Networks (CDNs)

// For static assets (like images, JavaScript, and CSS), use a CDN to offload content delivery, improve load times, and reduce the strain on your server.

// 7. Compression and Minification

// Gzip or Brotli Compression: Compress HTTP responses to reduce payload size and improve download speed. Enable gzip or Brotli compression in your HTTP server.

// Minify Assets: Minify JavaScript and CSS files using tools like UglifyJS or Terser to reduce the size of assets sent to clients.

// 8. Use a CDN or Edge Computing

// Leverage CDNs (like Cloudflare, AWS CloudFront) to serve static assets and even handle certain dynamic requests closer to the user. This reduces latency and speeds up response times.

// 9. Implementing Proper HTTP/2 or HTTP/3

// HTTP/2 supports multiplexing, header compression, and prioritization of requests, which can significantly improve load times and reduce the number of requests needed for the page to load.

// HTTP/3 (built on QUIC) offers even better performance and faster connection establishment than HTTP/2.

// 10. Profiling and Monitoring

// Use Performance Monitoring Tools: Tools like New Relic, AppDynamics, or Datadog can provide insights into bottlenecks and performance issues in production.

// Node.js Profiler: Use the built-in Node.js profiler or tools like clinic.js or 0x to identify slow operations and memory issues.

// 11. Scaling the Application

// Horizontal Scaling: If your application is CPU-bound or if scaling vertically is insufficient, you may need to scale horizontally by deploying multiple instances of your application behind a load balancer.

// Microservices Architecture: If your application is large and complex, consider breaking it down into microservices, which can be independently scaled.

// 12. Use Queues and Worker Processes

// If your application has long-running tasks (such as sending emails, processing images, etc.), consider using message queues (like RabbitMQ or Bull with Redis) to offload these tasks to background workers instead of blocking the main event loop.

// 13. Session Management

// Avoid storing session data in memory if you expect high traffic. Use Redis or another fast store for 
// sessions to prevent memory leaks and excessive memory usage.





//41: What is the connection pooling concept for databases?
//"Connection pooling in Node.js means maintaining a pool of reusable database connections instead of creating a new connection per request. 
// It improves performance and scalability by reducing connection overhead. In PostgreSQL, we use pg.Pool, and in MongoDB, Mongoose manages 
// a pool automatically, which can be configured with maxPoolSize."


//50. 1. Measure Performance

// Monitor response times using tools like Postman or cURL.

// Use PM2, Node.js Profiler, or console.time() to identify slow parts of the code.

// 2. Optimize the Code

// Avoid blocking the event loop: Use asynchronous APIs for I/O operations (e.g., fs.readFile() instead of fs.readFileSync()).

// For CPU-heavy tasks, use worker threads to offload them from the main thread.

// Optimize your database queries: Use indexing, caching (e.g., Redis), and connection pooling to reduce DB load.

// 3. Use Caching

// Cache frequently accessed data with Redis to avoid repetitive database queries.

// Use HTTP caching headers (e.g., Cache-Control) for static assets.

// 4. Improve API Response Handling

// Enable gzip compression to reduce response size.

// Return only necessary data in your API responses to minimize payload size.

// 5. Scale the Application

// Horizontal scaling: Deploy multiple Node.js instances and use a load balancer (e.g., NGINX) to distribute traffic.

// Clustering: Use Node's cluster module to leverage multiple CPU cores.

// 6. Monitor and Set Up Alerts

// Use tools like New Relic, Datadog, or PM2 for real-time monitoring and set up alerts for high response times or CPU spike


//52. How would you handle caching (Redis/Memcached) in Node.js?

// types of Caching in Node.js

// In-Memory Caching

// Store data in RAM inside your Node.js process.

// Fastest, but limited by server memory and lost if the server restarts.

// Example using a simple JS object or Map:

const cache = new Map();

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  if (cache.has(id)) return res.json(cache.get(id));

  const user = await db.getUserById(id);
  cache.set(id, user);  // store in cache
  res.json(user);
});


// Distributed Caching

// Use external caches like Redis or Memcached.

// Works across multiple servers or instances, persistent across restarts.

// Example using Redis:

const redis = require("redis");
const client = redis.createClient();

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  client.get(id, async (err, data) => {
    if (data) return res.json(JSON.parse(data));

    const user = await db.getUserById(id);
    client.setex(id, 3600, JSON.stringify(user)); // cache for 1 hour
    res.json(user);
  });
});



//51.How do you design a REST API vs a GraphQL API in Node.js?

// RESTful API kya hota hai?

// RESTful API ek API hai jo REST (Representational State Transfer) architecture principles ko follow karti hai.

// REST ke main principles:

// Stateless

// Server kisi client ke previous request ko yaad nahi rakhta.

// Har request me saari necessary information bhejni padti hai.

// Client-Server architecture

// Client aur server alag hote hain.

// Client user interface handle karta hai, server data aur logic handle karta hai.

// Uniform Interface

// Resources ke liye standard methods use hoti hain:

// GET → read

// POST → create

// PUT → replace/update

// PATCH → partial update

// DELETE → delete

// Resources identified by UR


// Handle Errors Gracefully

// Use proper status codes:

// 404 Not Found → resource doesn’t exist

// 400 Bad Request → invalid input

// 500 Internal Server Error → server issue


Success Responses
// | Code           | Meaning                                      | When to Use                 |
// | -------------- | -------------------------------------------- | --------------------------- |
// | 200 OK         | Request successful                           | GET, PUT, PATCH             |
// | 201 Created    | Resource successfully created                | POST                        |



Client Error Responses

// | Code                     | Meaning                           | When to Use                        |
// | ------------------------ | --------------------------------- | ---------------------------------- |
// | 400 Bad Request          | Invalid input / malformed request | Wrong JSON, missing fields         |
// | 401 Unauthorized         | Authentication failed / no token  | JWT expired or missing             |
// | 403 Forbidden            | Authenticated but not allowed     | User tries admin-only endpoint     |
// | 404 Not Found            | Resource doesn’t exist            | Invalid ID, endpoint               |



Server Error Responses

// | Code                      | Meaning                               | When to Use           |
// | ------------------------- | ------------------------------------- | --------------------- |
// | 500 Internal Server Error | Generic server error                  | Unexpected exception  |
// | 502 Bad Gateway           | Server acting as proxy/gateway failed | Reverse proxy errors  |
// | 503 Service Unavailable   | Server overloaded / maintenance       | Temporary downtime    |
// | 504 Gateway Timeout       | Server timed out                      | Slow upstream service |






//how can i run my app on different multiple servers as you told above

// Maan lo aapka app app.js hai. Aapko alag ports pe 2-3 instances run karne hain, jaise:

// PORT=3000 node app.js
// PORT=3001 node app.js
// PORT=3002 node app.js


// Iske liye app.js me port ko environment variable se read karne ka code hona chahiye:

// const express = require('express');
// const app = express();

// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send(`Hello from port ${port}`);
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// Step 2: Nginx install karo apne local machine pe

// Ubuntu/Debian par:

// sudo apt update
// sudo apt install nginx


// Mac par Homebrew
//  se:

// brew install nginx

// Step 3: Nginx configuration karo load balancing ke liye

// Nginx config file open karo:

// sudo nano /etc/nginx/sites-available/default


// Is content se replace ya add karo:

// upstream login_app {
//     server 127.0.0.1:3000;
//     server 127.0.0.1:3001;
//     server 127.0.0.1:3002;
// }

// server {
//     listen 80;

//     location / {
//         proxy_pass http://login_app;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }
// }

// Step 4: Nginx ko restart karo changes apply karne ke liye
// sudo systemctl restart nginx

// Step 5: Test karo load balancing

// Browser me jaake http://localhost open karo.

// Aapko har refresh par ya request par different port ka response mil sakta hai (depends on load balancer policy).





///// how would you design a rate limiter in your node js app interview question
const rateLimit = (limit, windowMs) => {
  const users = new Map();

  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const data = users.get(ip) || { count: 0, start: now };

    if (now - data.start > windowMs) {
      data.count = 1;
      data.start = now;
    } else {
      data.count++;
    }

    users.set(ip, data);

    if (data.count > limit) {
      res.status(429).json({ message: "Too many requests, try again later." });
    } else {
      next();
    }
  };
};


//////////////OR//////////////
const rateLimiter = (limit, windowMs) => {
  const users = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const ip = req.ip;

    let data = users.get(ip);

    if (!data) {
      data = { count: 1, start: now };
      users.set(ip, data);
      return next();
    }

    if (now - data.start > windowMs) {
      // Reset window
      data.count = 1;
      data.start = now;
      return next();
    }

    if (data.count >= limit) {
      return res
        .status(429)
        .send({ status: 'too many requests, please try again later' });
    }

    data.count++;
    next();
  };
};


module.exports = rateLimit;











//CODING JAVASCRIPT

//rotate array k times

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // handle if k > n

  reverse(arr, 0, n - 1);      // Step 1: reverse entire array
  reverse(arr, 0, k - 1);      // Step 2: reverse first k elements
  reverse(arr, k, n - 1);      // Step 3: reverse remaining elements

  return arr;
}

// helper function to reverse array in place
function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Example:
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(rotateArray(arr, k)); 
// Output: [5, 6, 7, 1, 2, 3, 4]


//What is the difference between hashing, encryption, and encoding? interview question

// ✅ Hashing vs Encryption vs Encoding
// 1️⃣ Hashing

// Purpose: Integrity check (data same hai ya change hua?)
// Feature: One-way — original data wapas nahi mil sakta
// Use cases: Passwords store karna, file integrity, digital signatures
// Examples: MD5, SHA-256, bcrypt

// 👉 "Hashing irreversible hota hai."

// 2️⃣ Encryption

// Purpose: Data ko secure karna
// Feature: Two-way — encrypt + decrypt (key se open hota hai)
// Use cases: Banking, JWT tokens, HTTPS, data transmission
// Examples: AES, RSA

// 👉 "Encryption reversible hota hai — key se original data mil jaata hai."

// 3️⃣ Encoding

// Purpose: Data transfer / readability (security nahi)
// Feature: Two-way, koi bhi decode kar sakta hai
// Use cases: URL encoding, Base64, ASCII
// Examples: Base64, UTF-8

// 👉 "Encoding security ke liye nahi hota – sirf format convert karega."

// 👌 One-line interview answers
// Hashing:

// One-way process for verifying integrity; cannot be reversed.

// Encryption:

// Two-way secure process; data can be decrypted using a key.

// Encoding:

// Two-way format conversion for data transmission, not for security.


////8. Fibonacci sequence (n-th term or full list)

// 0, 1, 1, 2, 3, 5, 8, ...

let n=0
let m=1 

console.log(n)
 let fib
 
 
 
 for(let i=1;i<=20;i++){
     fib =m+n
     console.log(fib)
     n=m 
     m=fib
 }


function fib(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

printFibonacci(10);
function fib(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

printFibonacci(10);


const fib =(n)=>{

     let first=0
     let second=1
     let next 

        console.log(first)
        console.log(second)
     for(let i=0;i<=n;i++){
             next= second+first
            console.log(next)
            first = second
            second=next

     }

   }


   fib(7)


   
// Find the largest number in an array

let arr = [1, 5, 3, 9, 2, 10];
let lrgNum = 0;

// for(let i=0;i<arr.length;i++){

//   for(let j=i;j<arr.length;i++){
//     if(arr[i]>arr[j]){
//       lrgNum=arr[i]
//     }
//   }
// }

// for (let j = 0; j < arr.length; j++) {
//   if (lrgNum < arr[j]) {
//     lrgNum = arr[j];
//   }
// }

// console.log("lrgNumbr1");
// console.log(lrgNum, "lrgNumbr");



//<-----ANAGRAM----->

function isAnagram(str1, str2) {
  // Step 1: Check length
  if (str1.length !== str2.length) return false;

  // Step 2: Create frequency counters
  const count1 = {};
  const count2 = {};

  // Step 3: Manual lowercase and count for str1
  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];

    // Convert uppercase to lowercase manually using ASCII
    if (ch >= 'A' && ch <= 'Z') {
      ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    count1[ch] = (count1[ch] || 0) + 1;
  }

  // Step 4: Manual lowercase and count for str2
  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];

    if (ch >= 'A' && ch <= 'Z') {
      ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    count2[ch] = (count2[ch] || 0) + 1;
  }

  // Step 5: Compare frequency maps
  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}



//Sort an array without using sort(


const arr=[2,4,3,6,5,6,8,11,7,9]


for(let i=0;i<arr.length;i++){
    
    if(arr[i]>arr[i+1]){
        let a= arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=a
    }
}




//1.Bubble Sort
Compares adjacent elements and swaps them if needed.

Time Complexity: O(n²)


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = 0; j < arr.length - i - 1; j++)
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  return arr;
}

//2. Selection Sort
//Finds the minimum element and places it at the beginning.


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[minIdx]) minIdx = j;
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

//12. Find the first non-repeating character in a string

// "aabbcde" → "c"
function firstNonRepeatingChar(str) {
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeating character found
}

const input = "ababbcde";
const result = firstNonRepeatingChar(input);

console.log(`First non-repeating character is: ${result}`);


//check if number is prime

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

//15. Find missing number in a sequence

function findMissingNumber(arr) {
  const n = arr.length + 1; // one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage
const numbers = [1, 2, 3, 5];
console.log("Missing number is:", findMissingNumber(numbers));


//SIMPLE SORTING CODE

let arr= [2,5,3,7,6,8]

let sorteddArr=[]

let temp;

for(let i=0;i<arr.length;i++){
   
     if(arr[i]>arr[i+1]){
             temp=arr[i]
             arr[i]=arr[i+1]
             arr[i+1]=temp
             
         }
}

//Check if two arrays are equal

// [1,2,3] vs [3,2,1] → false (if order matters)

let arr1=[1,2,3,5]
let arr2=[3,2,1,4]

let c=[]

const checkArr=(arr1,arr2)=>{
   
    if(arr1.length!=arr2.length) return false
   
    // arr[0]=1
    // arr[2]=1
   
    for(let i=0;i<arr1.length;i++){
       
        for(let j=0;j<arr2.length;j++){
           
            if(arr1[i]===arr2[j]){
                 c.push(arr2[j])
            }
        }
    }
   
    if(arr1.length==c.length){
       
        return 'arrays are equal'
    }
   
    return 'arrays are not equal'
   
}

console.log(checkArr(arr1,arr2))


/////////////////////////////////

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // Create frequency maps
  const countMap1 = {};
  const countMap2 = {};

  for (let num of arr1) {
    countMap1[num] = (countMap1[num] || 0) + 1;
  }

  for (let num of arr2) {
    countMap2[num] = (countMap2[num] || 0) + 1;
  }

  // Compare frequency maps
  for (let key in countMap1) {
    if (countMap1[key] !== countMap2[key]) {
      return false;
    }
  }

  return true;
}

// Example
console.log(arraysEqual([1, 2, 3], [3, 2, 1])); // true
console.log(arraysEqual([1, 2, 2], [2, 1, 1])); // false


//binary search

//find index of 7

// first find the mid element

let target = 5

let left= 0
let right= arr.length-1

let mid= Math.floor((left+right)/2)

//console.log(mid)

while(left<right){
   
    if(arr[mid]===target){
       
        console.log('target element is :',arr[mid])
        return mid
    }
   
    if(arr[mid]<target){
       //[6,7,8,9,10]
       
       left=mid
         mid=Math.floor((left+right)/2)
    }
   
    if(arr[mid]>target){
       
  ///[2,3,4,5,6]
      right = mid
      mid=Math.floor((left+right)/2)
    }
}





// by chat GPT binary search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Not found
}


//8. Fibonacci sequence (n-th term or full list)

// 0, 1, 1, 2, 3, 5, 8, ...

let n=0
let m=1 

console.log(n)
 let fib
 
 
 
 for(let i=1;i<=20;i++){
     fib =m+n
     console.log(fib)
     n=m 
     m=fib
 }


function fib(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

printFibonacci(10);
function fib(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    console.log(fib(i));
  }
}

printFibonacci(10);


//10. Check if two arrays are equal

// [1,2,3] vs [3,2,1] → false (if order matters)

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysEqual([1, 2, 3], [3, 2, 1])); // false


//11. Flatten a nested array

// [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

const arr=[1, [2, [3, 4]], 5]
const result=[]






const flatenArr=(arry)=>{
    
  for(let i=0;i<arry.length;i++){
      
      if(Array.isArray(arry[i])){
          
          flatenArr(arry[i])
      }else{
          result.push(arry[i])
      }
  }
}
flatenArr(arr)
console.log(result,'result')

//12. Find the first non-repeating character in a string

// "aabbcde" → "c"

function firstNonRepeatingChar(str) {
  const freq = {};

  // First pass: count character frequency
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Second pass: find first character with frequency 1
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (freq[ch] === 1) {
      return ch;
    }
  }

  return null; // or return -1 if no non-repeating char
}


// chech number is prime
function isPrime(n) {
  // Step 1: Agar number 1 ya usse chhota hai, prime nahi hai
  if (n <= 1) return false;

  // Step 2: 2 prime hai (special case)
  if (n === 2) return true;

  // Step 3: Agar number even hai (2 ke alawa), to prime nahi ho sakta
  if (n % 2 === 0) return false;

  // Step 4: Ab check karo ki koi number 3 se lekar √n tak divide karta hai ya nahi
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false; // agar divide ho gaya to prime nahi hai
    }
  }

  return true; // agar koi bhi divide nahi karta, to prime hai
}


//15. find missing number 
function findMissingNumber(arr) {
  const n = arr.length + 1; // Since one number is missing
  let expectedSum = (n * (n + 1)) / 2;
  
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}




//rotate array k times

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // handle if k > n

  reverse(arr, 0, n - 1);      // Step 1: reverse entire array
  reverse(arr, 0, k - 1);      // Step 2: reverse first k elements
  reverse(arr, k, n - 1);      // Step 3: reverse remaining elements

  return arr;
}

// helper function to reverse array in place
function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Example:
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(rotateArray(arr, k)); 
// Output: [5, 6, 7, 1, 2, 3, 4]





//Return the length of the longest substring with all unique characters  "abcabcbb"

let str="abcabcbb"

const findSubs=(str)=>{
    sml=2
    lrg=str.length-1
     let subStr
     const strObj={}
    for( let i=2;i<str.length;i++){
       subStr =substring(str,i)

       let s=""
       
        for(let j=0;j<subStr.length;j++){
            let isRepeat=false
              for(let k=0;k<s.length;k++){
                     if(subStr[j]==s[k]){
                        isRepeat=true
                           break;
                     }
              }
              if(!isRepeat){
                    s +=subStr[j]
              }
               
        }

        strObj[s.length]=s
        
    }
     

    let lengthOflongestStr = Object.keys(strObj).pop();
     
    return lengthOflongestStr
}

const substring=(str,length)=>{
    let substr=""
      for(let i=0;i<length;i++){
            substr+=str[i]
      }
      return substr
}
       
console.log(findSubs(str))




///////////////////////////
function longestUniqueSubstring(s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      let char = s[j];
      // check if char already present in str
      let found = false;
      for (let k = 0; k < str.length; k++) {
        if (str[k] === char) {
          found = true;
          break;
        }
      }
      if (found) break; // repeat mila toh ruk jao
      str += char; // unique hai toh add karo
      if (str.length > maxLen) maxLen = str.length;
    }
  }

  return maxLen;
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: 3


////Binary search Algorithm


const binarySearch=(arr,target)=>{
    let start=0
    let end= arr.length-1
  
    while(start<=end){
  let mid= Math.floor((start+end)/2)
         if(arr[mid]==target){
                return  mid
        }

    //[1,2,3,4,5,6,7,8]
      if(arr[mid]>target){
        end=mid-1
      }
      if(arr[mid]<target){
            start=mid+1
      }
      
        
    }

  
}

console.log(binarySearch(array,3))




//JAVASCRIPT

//How Es6 is dierent from Es5
// 1. Variable Declarations

// ES5: var (function-scoped, hoisting issues)

// ES6: let and const (block-scoped, safer)

//2.Arrow Functions

//3.Template Literals `Hello ${name}`;

//4.Modules

// ES5: No native module system (used CommonJS: require)

// ES6: Native import/export

// import value from './file';
// export default value;

//5.  ES5=function test(x) {
      //   x = x || 10;
      // }

      //ES6=function test(x = 10) {}

//What is first-class function?

//Jis language mein function ek normal value ki tarah behave kare, use first-class function language bolte hain.
   
   //1. Function ko variable mein store kar sakte ho
        //  const greet = function() {
        //   console.log("Hello");
        // };

   //2. Function ko argument bana kar bhej sakte ho
      //  function callMe(fn) {
      //     fn();
      //       }
      //   callMe(greet);



 // 35. What are higher-order functions? Give examples.
   //A higher-order function is a function that takes another function as input OR returns a function.
        // function greet() {
        // console.log("Hello");
        // }

        // function callMe(fn) {
        // fn(); // calling the passed function
        // }

        // callMe(greet);     


//38. How does JavaScript execute in the browser?

//   When a browser loads a page, it parses HTML. When it encounters a <script>, it sends the JS to the JavaScript engine (like V8).
// The engine first creates memory for variables/functions (hoisting), then executes code line-by-line using the call stack.
// Async tasks like setTimeout, fetch, and events are handled by browser Web APIs, and their callbacks return through the event loop and queues.
// Finally, the JS updates the DOM and the browser renders the UI.    


//39. what is nullish operator



//CSS

// .container{
//   background-color: yellow;
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   flex-direction:column
//   flex-wrap:wrap
//   height: 100vh;
// }

// #box1{
//   background-color:blue;
//   height: 80px;
//   width:80px;
//   border:2px solid black;
//   margin:5px;
//   padding:5px;
//   display:flex;
//   justify-content: center;
//   align-items:center;
// }

// #box2{
//   background-color:red;
//   border:2px solid black;
//   height:80px;
//   width:90px;
//   display:flex;
//   justify-content:center;
//   align-items:center;
  
  
// }

