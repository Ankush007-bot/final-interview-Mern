import React,{useState,useEffect} from 'react'
export default function App() {
const [count,setCount]=useState(0)

  const  Increment =()=>{

    
    setCount((prev)=>{
      return prev+1
    })
  }
   const  Decrement =()=>{
     
    setCount((prev)=>{

      if(prev<1) return 0
      return prev-1
    })
  }
  const Reset=()=>{
    setCount(0)
  }
useEffect(()=>{
    let cnt=JSON.parse(localStorage.getItem('count')) 
    if(cnt>0){
      setCount(cnt)
    }
    
},[])
  useEffect(()=>{

    localStorage.setItem('count',JSON.stringify(count))

  
  },[count])

  console.log(localStorage)
  return (
    <>
    <h1>
    counter
      <div>
        {/* <button onClick={Increment}>Increment</button> */}
        
         {count}
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
     
    </h1>
    </>
  )
}