// 1️⃣ JavaScript vs TypeScript

// JS:

// let age = 20
// age = "twenty"   // allowed 🤡


// TS:

// let age: number = 20
// age = "twenty"   // ❌ error


// TypeScript ka kaam:

// Code run hone se pehle hi galti pakad lena.

// 2️⃣ Variables ke types
// let name: string = "Ankush"
// let age: number = 25
// let isAdmin: boolean = true


// Array:

// let users: string[] = ["Ram", "Shyam"]
// let scores: number[] = [10, 20, 30]

// 3️⃣ Object type
// let user: {
//   id: number
//   name: string
//   email: string
// } = {
//   id: 1,
//   name: "Ankush",
//   email: "a@gmail.com"
// }

// 4️⃣ type (most important)

// Bar-bar same structure likhna bekar hota hai.

// type User = {
//   id: number
//   name: string
//   email: string
// }

// let u1: User = {
//   id: 1,
//   name: "Ankush",
//   email: "a@gmail.com"
// }

// 5️⃣ Function typing

// JS:

// function add(a, b) {
//   return a + b
// }


// TS:

// function add(a: number, b: number): number {
//   return a + b
// }


// Arrow:

// const add = (a: number, b: number): number => {
//   return a + b
// }

// 6️⃣ Optional ?
// type User = {
//   id: number
//   name: string
//   phone?: string   // optional
// }

// let u1: User = { id: 1, name: "Ankush" }  // ok

// 7️⃣ Union |

// Matlab multiple type allowed:

// let id: number | string

// id = 10
// id = "abc123"

// 8️⃣ Function me object pass karna
// type LoginInput = {
//   email: string
//   password: string
// }

// function login(data: LoginInput) {
//   console.log(data.email)
// }

// 9️⃣ Array of objects
// type User = {
//   id: number
//   name: string
// }

// let users: User[] = [
//   { id: 1, name: "Ram" },
//   { id: 2, name: "Shyam" }
// ]

// 🔥 10️⃣ typeof
// const user = {
//   id: 1,
//   name: "Ankush"
// }

// type User = typeof user


// Ab User automatically:

// {
//   id: number
//   name: string
// }


// Ye Next.js + tRPC ka backbone hai.

// 11️⃣ as const
// const status = ["ACTIVE", "BLOCKED"] as const


// Type banega:

// "ACTIVE" | "BLOCKED"

// 12️⃣ Generics (basic)
// function wrap<T>(value: T): T {
//   return value
// }

// wrap(10)       // number
// wrap("hello")  // string

// Agar tu ye 12 point samajh gaya →

// Tu Next.js + tRPC ready TypeScript samajh chuka hai 💯

// Bole to next step:
// 👉 Interfaces vs Types
// 👉 API ke liye request / response typing
// 👉 Zod ke sath TypeScript