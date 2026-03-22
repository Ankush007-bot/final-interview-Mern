import { ExampleTodo, ExampleStatus, getExampleTodosFromServer } from "./getTodo"

/**
 * Simple DOM-based Todo app in TypeScript to demonstrate types and state.
 * Usage: call `createTodoApp(container)` with an HTMLElement.
 */
export function createTodoApp(container: HTMLElement) {
  const state: { todos: ExampleTodo[] } = { todos: getExampleTodosFromServer().data }

  // create elements
  const title = document.createElement("h2")
  title.textContent = "Simple TypeScript Todo (DOM)"

  const form = document.createElement("form")
  const input = document.createElement("input")
  input.placeholder = "New todo"
  const addButton = document.createElement("button")
  addButton.type = "submit"
  addButton.textContent = "Add"
  form.appendChild(input)
  form.appendChild(addButton)

  const list = document.createElement("ul")

  const summary = document.createElement("div")

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    const value = input.value.trim()
    if (!value) return
    const newTodo: ExampleTodo = { id: Date.now(), text: value, status: "PENDING" as ExampleStatus }
    state.todos.unshift(newTodo)
    input.value = ""
    render()
  })

  function toggleTodo(id: number) {
    state.todos = state.todos.map(t => (t.id === id ? { ...t, status: t.status === "PENDING" ? "DONE" : "PENDING" } : t))
    render()
  }

  function removeTodo(id: number) {
    state.todos = state.todos.filter(t => t.id !== id)
    render()
  }

  function render() {
    // clear list
    list.innerHTML = ""
    for (const t of state.todos) {
      const li = document.createElement("li")
      const text = document.createElement("span")
      text.textContent = t.text
      text.style.textDecoration = t.status === "DONE" ? "line-through" : "none"

      const toggle = document.createElement("button")
      toggle.textContent = t.status === "PENDING" ? "Mark Done" : "Mark Pending"
      toggle.addEventListener("click", () => toggleTodo(t.id))

      const del = document.createElement("button")
      del.textContent = "Delete"
      del.addEventListener("click", () => removeTodo(t.id))

      li.appendChild(text)
      li.appendChild(document.createTextNode(" "))
      li.appendChild(toggle)
      li.appendChild(del)
      list.appendChild(li)
    }

    summary.textContent = `Total: ${state.todos.length} — Done: ${state.todos.filter(t => t.status === "DONE").length}`
  }

  // initial mount
  container.appendChild(title)
  container.appendChild(form)
  container.appendChild(list)
  container.appendChild(summary)
  render()

  return { destroy: () => (container.innerHTML = "") }
}
