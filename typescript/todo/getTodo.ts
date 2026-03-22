const EXAMPLE_STATUS = ["PENDING", "DONE"] as const

export type ExampleStatus = typeof EXAMPLE_STATUS[number]

export type ExampleTodo = {
  id: number
  text: string
  status: ExampleStatus
}

export type ExampleApiResponse<T> = {
  success: boolean
  data: T
}

export function getExampleTodosFromServer(): ExampleApiResponse<ExampleTodo[]> {
  return {
    success: true,
    data: [
      { id: 1, text: "Learn TypeScript", status: "PENDING" },
      { id: 2, text: "Build tRPC app", status: "DONE" }
    ]
  }
}


const STATUS = ["PENDING", "DONE"] as const

// "PENDING" | "DONE"
type Status = typeof STATUS[number]

type Todo = {
  id: number
  text: string
  status: Status
}

type ApiResponse<T> = {
  success: boolean
  data: T
}



function getTodosFromServer(): ApiResponse<Todo[]> {
  return {
    success: true,
    data: [
      { id: 1, text: "Learn TypeScript", status: "PENDING" },
      { id: 2, text: "Build tRPC app", status: "DONE" }
    ]
  }
}