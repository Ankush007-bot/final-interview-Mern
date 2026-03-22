"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
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

export default Home;
