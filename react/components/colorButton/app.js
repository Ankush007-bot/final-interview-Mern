import React, { useState } from "react";

export default function ColorChanger() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const [bg, setBg] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: bg,
        transition: "0.3s",
      }}
    >
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setBg(color)}
          style={{
            margin: "10px",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            background: color,
            color: "white",
            borderRadius: "5px",
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}


///////////////////////////////
/////////////////////////////////


import React, {useState} from 'react'
export default function App() {
 const arr= ['Red','Green','Blue','Yellow']

  const [bg, setBg] =useState('White')

  
  
  return (
    <>
      {
        arr.map((color)=>{

          return <div style={{background:bg}}>
             <button onClick={()=>{ setBg(color)}} >{color}</button>
          </div>
        })
      }
    </>
  )
}
