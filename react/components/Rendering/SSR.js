// import React from 'react';

// function HomePage({ serverTime }) {
//   return (
//     <div>
//       <h1>Welcome to Server-Side Rendered Page</h1>
//       <p>Current server time is: {serverTime}</p>
//     </div>
//   );
// }

// // This function runs on the server during SSR
// export async function getServerSideProps() {
//   // Get the current server time
//   const serverTime = new Date().toISOString();

//   // Return the server time as a prop to the component
//   return { props: { serverTime } };
// }

// export default HomePage;




// pages/index.js
import axios from 'axios';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Fetch data on the server side before rendering the page
export async function getServerSideProps() {
  try {
    // Fetch data from an API on the server
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
      props: { posts: response.data }, // Pass fetched data to the page as props
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { posts: [] } }; // In case of error, pass an empty array
  }
}

export default Home;


