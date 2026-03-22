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

// all rendered data will be available on view page source
// request call will not be visible in network tab
//wont be loading in initial rendering will rendered instantly
// benefeicial for SEO purpose

// can be used in e-commerce websites for product rendering
//can be used dashboard like pages on which fast loading of page is required
// or the pages in which we only have to show information and does not include more interactive
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




// How SSR Works in This Example:
// Initial Request: When a user makes a request to the server for the page (/), the server will execute getServerSideProps().
// Server Generates HTML: The server generates the HTML, embedding the serverTime inside the HTML and sends it back to the client.
// Client Receives Fully Rendered HTML: The browser immediately displays the page with the correct server time, without waiting for JavaScript to load or run.
// Benefits of Server-Side Rendering:
// Faster Initial Page Load:

// Since the server sends the pre-rendered HTML to the client, the browser can display the page content more quickly, without having to wait for JavaScript to load and execute. This improves the perceived performance for users.
// SEO-Friendly:

// Search engines can crawl fully rendered HTML content, as opposed to waiting for JavaScript execution. This is especially important for websites that rely on SEO to generate organic traffic.
// Better Performance on Low-End Devices:

// With SSR, the heavy lifting is done by the server, so clients with lower processing power or slower internet connections don’t need to work as hard, providing a better user experience.
// Social Media Sharing Optimization:

// When sharing links on platforms like Facebook or Twitter, SSR ensures that the correct metadata (like title, description, and image) is embedded in the HTML, allowing for proper rendering of the link preview.
// Improved First Contentful Paint (FCP):

// Since the HTML is already pre-rendered, the browser can render the first visible content faster, improving the First Contentful Paint (FCP) metric, which is crucial for user experience.




// When to Use Server-Side Rendering (SSR):
// SEO is Crucial:

// Use SSR when SEO is a priority for your website or web application. Since SSR sends fully rendered HTML to the browser, search engines can easily crawl and index the content, improving visibility on search engines like Google.
// Example: E-commerce websites, blogs, news sites, and marketing pages that rely on search engine traffic.
// Faster Initial Page Load:

// Use SSR when you need to ensure a fast first page load. SSR can provide faster time-to-content because the server sends a pre-rendered HTML page, meaning the user doesn’t have to wait for JavaScript to download, parse, and render content.
// Example: Websites that require high performance on slower networks or devices, such as news websites or landing pages.
// Social Media and Open Graph Sharing:

// Use SSR if your website relies heavily on social sharing (e.g., Facebook, Twitter, LinkedIn). SSR ensures that the metadata (such as titles, images, and descriptions) for sharing links is rendered on the server and visible to social media bots.
// Example: Blog posts or content-driven websites where social sharing is an important source of traffic.
// Personalized Content for Each User:

// Use SSR if your application needs to show different content based on user information at the time of the request (e.g., logged-in users seeing personalized dashboards).
// Example: Personalized dashboards, user-specific recommendations, or data that changes based on user login status.
// Better Accessibility for Non-JavaScript Users:

// Use SSR if your website must work for users who may have JavaScript disabled or who rely on assistive technologies.
// Example: Enterprise websites, government websites, or critical applications where users may have JavaScript disabled or use accessibility tools.
// When to Use Client-Side Rendering (CSR):
// Interactivity and Dynamic User Interfaces:

// Use CSR if your application relies heavily on client-side interactions, dynamic content, and real-time updates. CSR is ideal for Single Page Applications (SPAs) where the user interacts with the site without full-page reloads.
// Example: Web applications like Gmail, Facebook, or complex dashboards that have rich interactivity and require frequent client-side updates.
// Reduced Server Load:

// Use CSR when you want to offload the rendering process to the client and reduce the burden on the server. CSR enables the server to send only the necessary data (e.g., APIs or JSON) and the client handles rendering and updates.
// Example: Web apps with heavy client-side logic or websites with user-generated content where server rendering may be unnecessary.
// Less Frequent Updates:

// Use CSR if your website or app doesn’t require frequent content updates and the user can benefit from a more interactive experience. Once the JavaScript is loaded, the app can function without constant server requests.
// Example: Blogs, portfolio sites, or informational websites where content doesn’t change on every page load.
// When the Application is a SPA (Single-Page Application):

// Use CSR when you are building a Single-Page Application where the content is loaded dynamically, and users can navigate through different views without reloading the page.
// Example: A complex web app like Trello, where the user stays on the same page, and the content is dynamically rendered based on user actions.
// Improved User Experience (UX) for Highly Dynamic Applications:

// Use CSR when you need a smooth, app-like experience with fast transitions between views and less reliance on server communication.
// Example: Social media platforms, online collaboration tools, and other interactive apps where quick, dynamic updates improve the experience.
// Smaller Initial Payload (No Need for Initial Full HTML):

// Use CSR if the user doesn’t need to see any meaningful content until JavaScript has loaded and the client is ready to render the page.
// Example: Sites where JavaScript can handle the entire rendering pipeline, such as complex data visualization dashboards or interactive mapping applications.
// Hybrid Approach (SSR + CSR):
// In some cases, a hybrid approach (using both SSR and CSR) may be the best solution. For example:

// Next.js offers features like static site generation (SSG) and incremental static regeneration (ISR) alongside SSR, allowing you to serve most pages statically and fallback to SSR for dynamic pages.
// Example: An e-commerce site that uses SSR for product pages (for SEO and personalization) and CSR for the checkout flow (for faster interaction and less server load).