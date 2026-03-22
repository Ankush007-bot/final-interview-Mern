import React, { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}
           <img 
              src={item.image} 
              alt={item.title} 
              width="100"
              style={{ display: "block", marginBottom: "8px" }}
            />
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;


//TABULAR FORM

import React, {useState,useEffect} from 'react'
export default function App() {
//'https://fakestoreapi.com/products'
const [product,setProducts]=useState()
  const[loading,setLoading]=useState(true)
  const [error,setError]=useState(false)
  

  useEffect(()=>{

    fetch('https://fakestoreapi.com/products').then((res)=>{
   res=res.json()
      return res
             
    }).then((data)=>{
    if(data){
      console.log(data,'data')
      setProducts(data)
      setLoading(false)
     
    }
    })
    .catch((err)=>{
       setError(true)
      setLoading(false)
    })
    
  },[])

  if(loading){

    return <h1>
    Product is loading</h1>
  }
  if(error){

    return <h1>
    Problem while fetching products</h1>
  }
  
  return (
    <>
     <>Display product</>
      return <table>
        <thead>
          <tr>
            <td> ID</td>  <td> Category</td>
          </tr>   
        </thead>

        <tbody>

      {product&&product.map((item)=>{

      return <tr key={item.id}>
       <td> {item.id}</td> <td> {item.category}</td>
      </tr>
      
      })}
          </tbody>
         </table>
    </>
  )
}