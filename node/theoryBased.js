
//1.Explain event loop in node js
//2. Explain internal architecture of node js
//3. what is npm and list out the uses of it.
//4.Explain the execution flow of promise, async/await, setTimeout, setImmediate, process.nextTick()
//5.what the the purpose of package.json file
//6.what is http module and create a server using it
//7.How do you create secure server setup using express and https
//8.How will u update any npm existing packages
//9. list out some global objects in node js
//10. explain piping the data between streams
//11. what are the features of express js
//12.what happens if we pass parameter to next function inside middleware
//13. how we can jump from one middleware to another skipping some.
//14. what is the difference between PATCH and PUT API
//15. Explain the middleware concept in Node js
//16. what is jwt and explain the structure of JWT token
//17. How can we modify the signature of JWT?
//18. What is the authentication and authorization concept?
//19. How do you scale node js application using cluster module
//20.What is worker thread ?how does it handle cpu-intensive tasks
//21. How can you optimize the database queries
//22 what is redis database ?explain the use of it
//23. How we can improve the performance of node js application
//24. what is connection pooling concept for databases
//25. what is middleware concept in node js
//26.what is refresh token concept in node js give example
//27. what is indexing in mongo db
//28. what is transaction in mongo db


//MNC INTERVIEW QUESTIONS

  //1 write a code toa node server
  //2.what is the new consepts in ES6
  //3.what is the advantages of express js over nodejs
  //4.How you perform error handling in node js
  //5.what is callback hell and how to avoid it
  //6.what is the difference between REST api and SOAP api
  //7. Explain Routing in node js
  //8.Retrun the index of every capital number of given string = 'Hello World i am Ankush'
  //9. How to handle file uploads in node js
   //10. How to handle CORS in node js
   //11. what is child process in node js
   //12. what is options method in node js in context of REST API
   //13. If the node server is running on 5000 and react server is running on 3000 but the domain is same,will it create CORS issue?
   //14.How to connect node js with postgres database and mongo db and list down the packages used for it
   //15.what is the security measures you can take in node js application
   //16.what is Halmet in node js
   //17.How we can make API fast in node js
   //18.write down a query to conversion of male to female and male to female for every record in sql database
   //19.what is Module in node js and how to create a module
   //20. what is controll flow in node js and how to handle it
   //21.what are disadvantages of node js
   //22.what is REPL  
   //23.what is event driven  programming in node js
   //24. folder structure of node js application
   //25.what is EJS and how to use it in node js
   //26. Difference between query.params and request.params in node js
   //27.How to manage sessions in node js



//5.what the the purpose of package.json file
The package.json file is the manifest file for a Node.js project. It defines the project’s metadata, dependencies, scripts, and configurations. Its main purposes include:

Managing dependencies: Lists packages required (dependencies, devDependencies) so others can install them with npm install.

Project metadata: Includes name, version, description, author, license, etc.

Script automation: Defines scripts for tasks like start, build, test, etc.

Version control: Helps track and control versions of dependencies.

//6.what is http module and create a server using it

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// 🔹 res.end('Hello, world!');
// Required — it tells Node to end the response and send data to the client.

// Without res.end(), the client will keep waiting, and the response never completes.



//7.How do you create secure server setup using express and https

const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

// Load SSL certificate and private key
const options = {
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt')
};

// Define a simple route
app.get('/', (req, res) => {
  res.send('Secure Express Server');
});

// Create HTTPS server
https.createServer(options, app).listen(443, () => {
  console.log('Secure server running on https://localhost');
});


//What is Epress in node js

//Express is a minimal, fast, and flexible web application framework for Node.js. It simplifies building web 
// servers and APIs by providing a robust set of features like routing, middleware support, and template rendering
//  on top of Node’s built-in HTTP module.


//12.what happens if we pass parameter to next function inside middleware

//When you call next() without parameters, Express moves to the next middleware or route handler.

//When you call next(err) with a parameter (an error), Express skips all remaining non-error middleware and 
// passes control directly to the error-handling middleware (middleware with four arguments: (err, req, res, next)).

//13.how we can jump from one middleware to another skipping some.

app.get('/example', (req, res, next) => {
    if (someCondition) {
      next('route');  // Skip remaining middleware for this route
    } else {
      next();
    }
  }, (req, res) => {
    // This middleware will be skipped if next('route') is called
    res.send('First middleware');
  });
  
  // This handler will run if next('route') is called
  app.get('/example', (req, res) => {
    res.send('Skipped to this middleware');
  });

  //25. what is middleware in node js

//   Middleware in Node.js (especially in Express) is a function that has access to the request (req), response (res), and the next middleware function in the request-response cycle.

// Middleware functions can:

// Execute any code.

// Modify req and res objects.

// End the request-response cycle.

// Call next() to pass control to the next middleware.

// They are used to handle tasks like logging, authentication, parsing, error handling, and more in a modular way.

const express = require('express');
const app = express();

// Middleware function to log request details
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
}

// Middleware function to check for a query param "token"
function checkToken(req, res, next) {
  if (req.query.token === '123') {
    next(); // Token valid, continue
  } else {
    res.status(401).send('Unauthorized: Invalid token');
  }
}

app.use(logger); // Use logger middleware for all routes

app.get('/data', checkToken, (req, res) => {
  res.send('Protected data accessed!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//14.what is the difference between PATCH and PUT API

//15. what is JWT and explain its structure

//JWT (JSON Web Token) is a compact, URL-safe token format used for securely transmitting information between 
// parties as a JSON object. It is widely used for authentication and authorization in web applications.

// A JWT consists of three parts, separated by dots (.):

// Copy
// Edit
// xxxxx.yyyyy.zzzzz

// Header (xxxxx)

// Contains metadata about the token, typically:

// The type of token (JWT)

// The signing algorithm (e.g., HS256)

// Example (Base64Url-encoded JSON):

// json
// Copy
// Edit
// {
//   "alg": "HS256",
//   "typ": "JWT"
// }


// Payload (yyyyy)

// Contains the claims or the data you want to transmit.

// Can include registered claims like iss (issuer), exp (expiration), sub (subject), and custom claims like user ID.

// Example:

// json
// Copy
// Edit
// {
//   "sub": "1234567890",
//   "name": "John Doe",
//   "admin": true
// }

// Signature (zzzzz)

// Created by signing the encoded header and payload with a secret key using the algorithm specified in the header.

// Ensures the token’s integrity and authenticity.

// 🔹 How it works:
// Client receives JWT after login.

// Client sends JWT in headers for protected routes.

// Server verifies signature to trust the token’s data.

const jwt = require('jsonwebtoken');

const secretKey = 'your-very-secure-secret';

// Payload — data to encode inside the token
const payload = {
  userId: '12345',
  name: 'John Doe',
  role: 'admin'
};

// Options — like token expiry
const options = {
  expiresIn: '1h'  // token expires in 1 hour
};

// Generate token
const token = jwt.sign(payload, secretKey, options);

console.log('Generated JWT:', token);



//TO VERIFY TOKEN
const jwt = require('jsonwebtoken');

// The secret key used to sign the token (must be the same as when signing)
const secretKey = 'your-very-secure-secret';

// Example token (usually received from client, e.g., in Authorization header)
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'  // shortened here

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.log('Token is invalid or expired:', err.message);
    // Handle invalid token (e.g., send 401 Unauthorized)
  } else {
    console.log('Decoded payload:', decoded);
    // Token is valid, proceed with the request
  }
});


//17.

//You cannot directly modify the signature of a JWT because it is generated by hashing the header and payload 
// with a secret key. Any change to the token’s data requires re-signing the token with the secret key to produce 
// a new valid signature.

//The signature protects the token from tampering.

//If you change the header or payload without re-signing, the signature verification will fail and the token
//  will be rejected.

  