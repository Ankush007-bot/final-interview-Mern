import React, { useEffect, useState } from 'react'
//1. Build a Todo Application with Filters and Local Storage

export default function App() {

  const [todo ,setTodo] = useState([])
  const[edit,setEdit]=useState(false)
  const [input,setInput]=useState('')
  const [updItm,setUpdItm]=useState('')
const handleInput=(e)=>{
 
  setInput(e.target.value)
}

  const addTodo =()=>{
   if(edit){
     let itm=todo
   let indx=  itm.indexOf(updItm)
     

     itm=input
     todo[indx]=itm
     setTodo([...todo])
     setEdit(false)
     setInput('')
   }else{
      setTodo([...todo,input])
    setInput('')
   }
   
  }

  const deleteTodo=(ind)=>{
    let d=todo
    d.splice(ind,1)
    setTodo([...d])
   
  }
   const editTodo=(ind)=>{
     setEdit(true)
    let ed=todo[ind]
     setUpdItm(ed)
    setInput(ed)
   
  }

  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo));
    let cacheTodo=localStorage.getItem('todo')
    console.log(cacheTodo,'cacheTodo')
  },[todo])
  return (
    <>
      <input value={input} type='text' onChange={(e)=>{handleInput(e)}}/>
      <button onClick={addTodo}>{edit?'UPDATE':'ADD'}</button>
     <div>{todo.map((t,i)=>{
      return (
        <div key={i}>
          {t} 
          <button onClick={(e)=>{deleteTodo(i)}} >delete</button>

           <button onClick={(e)=>{editTodo(i)}} >edit</button>
        </div>
      )
     })}</div>
    <h1>Hello world</h1>
      </>
  )
}




////////////
/////////////////
//USING useREDUCER

import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: input,
    });

    setInput("");
  };

  return (
    <>
      <h2>Todo List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
