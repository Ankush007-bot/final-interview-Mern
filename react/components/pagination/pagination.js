import React,{useState,useEffect} from 'react'
export default function App(){

  const[allProducts,setAllproducts]=useState()
  const [products,setProducts]=useState()
  const [pgNum,setPgNum]=useState(1)

const Increment=()=>{
 
  setPgNum((prev)=>{
    if(prev==numOfPg) return prev
   return prev+1
  })
}

  const Decrement=()=>{
 
  setPgNum((prev)=>{
    if(prev==1) return prev
   return prev-1
  })
}
  
  const productCard=(pr)=>{
    return(
      <>
      <div key={pr.id}>
        <div>
           <span>NO.</span><br/>
        <span>{pr.id}</span><br/>
          <span>TITLE</span><br/>
        <span>{pr.title}</span><br/>
          <div>
          <span>CATEGORY</span>
         <span>{pr.category}</span>
        </div>
          </div>
      </div>
      </>
    )
  }

  const numOfPg=allProducts&&allProducts.length/5

  useEffect(()=>{
     let a = allProducts&&allProducts.slice(0,5)
    console.log(a,'a1')
    setProducts(a)
  },[allProducts])

  

  
  useEffect(()=>{
    let indx=pgNum-1
        indx=indx*5
        endInd=indx*2
    console.log(indx,'indx')
    console.log(allProducts,'allProducts')
     // let a = allProducts&&allProducts.splice(indx,5)
    if(allProducts&&allProducts.length){
let a = [...allProducts]
     a = a&&a.splice(indx,5)
      console.log(a,'a')
    if(a&&a.length){
      setProducts(a)
    }
    }
    
     
   
    
    
  },[pgNum])

  
const numArr=[]
 const fun= ()=>{
    for(let i=1;i<=numOfPg;i++){
      numArr.push(i)
    }
  }
  fun()
  

const pageNumBar=(num)=>{

  return (
     <div>
    <span>{num}</span>
    </div>
  )
}
  
 useEffect(()=>{
fetch('https://fakestoreapi.com/products').then((res)=>{
    return res.json()
   }).then((data)=>{
    // console.log(data,'data')
     setAllproducts(data)
   }).catch((err)=>{
     console.log(err,'err')
   })
   
    
  },[])
  
 
  return(
     <>
    <h1>
    PAGINATION
    </h1>
       {products&&products.map((item)=>{
         return  productCard(item)
       })}

       <div>
         <button onClick={Decrement}>Previous</button>
         {pgNum}
          <button onClick={Increment}>Next</button>
       </div>
    </>
  )
}