import React, { useEffect, useState } from "react"
import { ExampleTodo as TodoType, ExampleStatus as Status, getExampleTodosFromServer } from "./getTodo"

export default function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [text, setText] = useState<string>("")

  useEffect(() => {
    const res = getExampleTodosFromServer()
    setTodos(res.data)
  }, [])

  function addTodo() {
    if (!text.trim()) return
    const newTodo: TodoType = { id: Date.now(), text: text.trim(), status: "PENDING" as Status }
    setTodos((prev: TodoType[]) => [newTodo, ...prev])
    setText("")
  }

  function toggleTodo(id: number) {
    setTodos((prev: TodoType[]) =>
      prev.map((t: TodoType) => (t.id === id ? { ...t, status: t.status === "PENDING" ? "DONE" : "PENDING" } : t))
    )
  }

  function removeTodo(id: number) {
    setTodos((prev: TodoType[]) => prev.filter((t: TodoType) => t.id !== id))
  }

  return (
    <div>
      <h2>Simple TypeScript Todo (React)</h2>

      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault()
          addTodo()
        }}
      >
        <input value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="New todo" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((t: TodoType) => (
          <li key={t.id}>
            <span style={{ textDecoration: t.status === "DONE" ? "line-through" : "none" }}>{t.text}</span>
            {" "}
            <button onClick={() => toggleTodo(t.id)}>{t.status === "PENDING" ? "Mark Done" : "Mark Pending"}</button>
            <button onClick={() => removeTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>Total: {todos.length}</p>
      <p>Done: {todos.filter(t => t.status === "DONE").length}</p>
    </div>
  )
}
import React, { useEffect, useState } from "react"
import { ExampleTodo as TodoType, ExampleStatus as Status, getExampleTodosFromServer } from "./getTodo"

export default function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [text, setText] = useState<string>("")

  useEffect(() => {
    const res = getExampleTodosFromServer()
    setTodos(res.data)
  }, [])

  function addTodo() {
    if (!text.trim()) return
    const newTodo: TodoType = { id: Date.now(), text: text.trim(), status: "PENDING" as Status }
    setTodos((prev: TodoType[]) => [newTodo, ...prev])
    setText("")
  }

  function toggleTodo(id: number) {
    setTodos((prev: TodoType[]) =>
      prev.map((t: TodoType) => (t.id === id ? { ...t, status: t.status === "PENDING" ? "DONE" : "PENDING" } : t))
    )
  }

  function removeTodo(id: number) {
    setTodos((prev: TodoType[]) => prev.filter((t: TodoType) => t.id !== id))
  }

  return (
    <div>
      <h2>Simple TypeScript Todo (React)</h2>

      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault()
          addTodo()
        }}
      >
        <input value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="New todo" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((t: TodoType) => (
          <li key={t.id}>
            <span style={{ textDecoration: t.status === "DONE" ? "line-through" : "none" }}>{t.text}</span>
            {" "}
            <button onClick={() => toggleTodo(t.id)}>{t.status === "PENDING" ? "Mark Done" : "Mark Pending"}</button>
            <button onClick={() => removeTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>Total: {todos.length}</p>
      <p>Done: {todos.filter(t => t.status === "DONE").length}</p>
    </div>
  )
}
import React, { useEffect, useState } from "react"
import {
  ExampleTodo as TodoType,
  ExampleStatus as Status,
  getExampleTodosFromServer
} from "./getTodo"

export default function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [text, setText] = useState<string>("")

  useEffect(() => {
    const res = getExampleTodosFromServer()
    setTodos(res.data)
  }, [])

  function addTodo() {
    if (!text.trim()) return
    const newTodo: TodoType = { id: Date.now(), text: text.trim(), status: "PENDING" as Status }
    setTodos((prev: TodoType[]) => [newTodo, ...prev])
    setText("")
  }

  function toggleTodo(id: number) {
    setTodos((prev: TodoType[]) =>
      prev.map((t: TodoType) => (t.id === id ? { ...t, status: t.status === "PENDING" ? "DONE" : "PENDING" } : t))
    )
  }

  function removeTodo(id: number) {
    setTodos((prev: TodoType[]) => prev.filter((t: TodoType) => t.id !== id))
  }

  return (
    <div>
      <h2>Simple TypeScript Todo (React)</h2>

      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault()
          addTodo()
        }}
      >
        <input value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="New todo" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((t: TodoType) => (
          <li key={t.id}>
            <span style={{ textDecoration: t.status === "DONE" ? "line-through" : "none" }}>{t.text}</span>
            {" "}
            <button onClick={() => toggleTodo(t.id)}>{t.status === "PENDING" ? "Mark Done" : "Mark Pending"}</button>
            <button onClick={() => removeTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>Total: {todos.length}</p>
      <p>Done: {todos.filter(t => t.status === "DONE").length}</p>
    </div>
  )
}
import React, { useEffect, useState } from "react"
import { ExampleTodo as TodoType, ExampleStatus as Status, getExampleTodosFromServer } from "./getTodo"

export default function TodoList(): JSX.Element {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [text, setText] = useState<string>("")

    useEffect(() => {
        const res = getExampleTodosFromServer()
        setTodos(res.data)
    }, [])

    function addTodo() {
        if (!text.trim()) return
        const newTodo: TodoType = { id: Date.now(), text: text.trim(), status: "PENDING" as Status }
        setTodos((prev: TodoType[]) => [newTodo, ...prev])
        setText("")
    }

    function toggleTodo(id: number) {
        setTodos((prev: TodoType[]) =>
            prev.map((t: TodoType) => (t.id === id ? { ...t, status: t.status === "PENDING" ? "DONE" : "PENDING" } : t))
        )
    }

    function removeTodo(id: number) {
        setTodos((prev: TodoType[]) => prev.filter((t: TodoType) => t.id !== id))
    }

    return (
        <div>
            <h2>Simple TypeScript Todo</h2>

            <form
                onSubmit={e => {
                    e.preventDefault()
                    addTodo()
                }}
            >
                <input value={text} onChange={e => setText(e.target.value)} placeholder="New todo" />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map(t => (
                    <li key={t.id}>
                        <span style={{ textDecoration: t.status === "DONE" ? "line-through" : "none" }}>{t.text}</span>
                        {" "}
                        <button onClick={() => toggleTodo(t.id)}>{t.status === "PENDING" ? "Mark Done" : "Mark Pending"}</button>
                        <button onClick={() => removeTodo(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <p>Total: {todos.length}</p>
            <p>Done: {todos.filter(t => t.status === "DONE").length}</p>
        </div>
    )
}
