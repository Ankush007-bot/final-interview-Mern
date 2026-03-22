// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

// it is usefull for the component on which seo is not important
// for task like checkout in e-commerce website
// more usefull for single page appliations in which page is more interactive and component is loading dynamically
// it is usefull for those application in which we do not want to load the server again and again in which their is slow internet access


const CSR = () => {
  // Set up state to store the fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data when the component mounts (client-side)
  useEffect(() => {
    // Simulating a fetch request from an API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);  // Set the response data
        setLoading(false);  // Update loading state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading message while fetching data
  }

  return (
    <div>
      <h1>Client-Side Rendering Example</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CSR;
