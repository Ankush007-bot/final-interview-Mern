import { useState } from "react"

/* ---------------- TYPES ---------------- */

// Ye ek todo ka shape hai
type Todo = {
  id: number
  text: string
  status: Status
}

/* 
Ye allowed status values hain.
as const likhne se TypeScript inko exact value maan leta hai,
string nahi.
*/
const STATUS = ["PENDING", "DONE"] as const

// "PENDING" | "DONE"
type Status = typeof STATUS[number]

/*
Generic response type
Ye bataata hai: data ke andar jo type doge wahi hoga
*/
type ApiResponse<T> = {
  success: boolean
  data: T
}

/* -------------- FAKE API -------------- */

// Backend jaisa function
function getTodosFromServer(): ApiResponse<Todo[]> {
  return {
    success: true,
    data: [
      { id: 1, text: "Learn TypeScript", status: "PENDING" },
      { id: 2, text: "Build tRPC app", status: "DONE" }
    ]
  }
}

/* -------------- COMPONENT -------------- */

export default function TodoList() {
  // useState ko batana padta hai ki ye Todo[] store karega
  const [todos, setTodos] = useState<Todo[]>([])

  function loadTodos() {
    const response = getTodosFromServer()

    // response.data ka type = Todo[]
    setTodos(response.data)
  }

  return (
    <div>
      <button onClick={loadTodos}>Load Todos</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} - {todo.status}
          </li>
        ))}
      </ul>
    </div>
  )
}















// Ab isme tera doubt clear karte hain
// 🔹 as const
// const STATUS = ["PENDING", "DONE"] as const


// Agar as const nahi hota to:

// STATUS = string[]


// Par hume chahiye:

// "PENDING" | "DONE"


// Isliye as const.

// 🔹 typeof STATUS[number]
// type Status = typeof STATUS[number]


// STATUS array hai:

// ["PENDING", "DONE"]


// [number] ka matlab:

// is array ka koi bhi index

// So:

// "PENDING" | "DONE"

// 🔹 Generic ApiResponse<T>
// type ApiResponse<T> = {
//   success: boolean
//   data: T
// }


// Yahan T placeholder hai.

// ApiResponse<Todo[]>


// Matlab:

// data = Todo[]

// 🔹 Ye line sabse important
// const response = getTodosFromServer()
// setTodos(response.data)


// TypeScript jaanta hai:

// response.data = Todo[]


// Isliye todos.map(todo => todo.text) safe hai.