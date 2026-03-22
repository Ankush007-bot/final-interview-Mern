

"use client";

import React, { useEffect, useState } from 'react'
 import { useSelector,useDispatch } from 'react-redux'
 import ReactDOM from "react-dom";


export default function Todo() {
 const todoItem = ['playing game1','going gym','study','office work', 'watchMovie']

 const[item,setItems]=useState([])

    let memberData
const dispatch = useDispatch()
    memberData = useSelector((state)=>{

        return state.cmn.memberData
    })


const updateState = ()=>{



    console.log(memberData,'memberData')
    dispatch({ type: "memberData", payload: item });
}


const updateItems = ()=>{

    setItems([...memberData,...todoItem],[])
}


const popItems = ()=>{
    const newItems = [...item]; // Create a new copy of the array
    newItems.pop()
    console.log(newItems)
    setItems(newItems)
}
console.log(item,'item')



let showItem

showItem= item.map((item)=>{
    return <div>
      <list>{item}</list>
    </div>
  })
console.log(showItem,'showItem')
useEffect(()=>{


})
  return (
    <div>ToDo-list-App


<button onClick={updateState}> click me </button>
<button onClick={updateItems}> update items </button>
<button onClick={popItems}> popItems </button>


{showItem}


{/* {item.map((item)=>{
    return <div>
        <ul>
      <list>
       <span>{item}</span>
        </list>
      </ul>
    </div>
  })} */}


    </div>
  )
}
