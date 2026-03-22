// 1. Static Site Generation (SSG)
// Definition: Pages are generated at build time (i.e., when you run the build process). The HTML for each page 
// is pre-rendered and saved, which means it can be served as static files.
// Best for: Content that doesn’t change often and can be pre-rendered ahead of time. Ideal for blogs, 
// documentation, portfolios, or any site with content that doesn’t change frequently.
// How it Works: During the build process, Next.js will generate HTML for each page. These pages are served as 
// static files, making them extremely fast.
// Key Function: getStaticProps() (for fetching data at build time).



import React from 'react';

// Blog component that receives data as a prop
function Blog({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Fetch blog posts at build time using getStaticProps
export async function getStaticProps() {
  // Simulating fetching data from an API or database
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  // Returning data to the component as props
  return {
    props: { posts }, // This will be passed to the Blog component as a prop
  };
}

export default Blog;


// getStaticProps(): This is the function used for Static Site Generation in Next.js. It runs at build time (when you build your project using next build) and fetches data that will be passed to the page component as props.

// Rendering Static HTML: Since Next.js generates this page at build time, it will render the HTML for all the posts ahead of time and serve it to the client on every request.

// Benefits of SSG:

// The page is pre-rendered during build time, making it extremely fast to load because the HTML is already generated and served as static content.
// Since there is no server-side processing at request time, it reduces server load and provides a great user experience.