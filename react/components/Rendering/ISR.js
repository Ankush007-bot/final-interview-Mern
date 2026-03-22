// (Incremental Static Regeneration)
// If you need to periodically update your static content without rebuilding the entire site, you can use 
// Incremental Static Regeneration (ISR).

// For example, to regenerate the page every 60 seconds:

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
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: { posts },
    revalidate: 60, // Rebuild the page every 60 seconds if there's a request
  };
 }
 export default Blog;

// With ISR, Next.js will regenerate the static page in the background whenever there’s a request after 60 seconds of the previous generation.

// Summary
// Static Site Generation (SSG) pre-renders your pages at build time for fast load times and great SEO.
// Use getStaticProps() to fetch the data at build time and pass it as props to your page component.
// This method is great for pages with content that does not change frequently, such as blogs, documentation, portfolios, and marketing sites.



//FOR VERSION ABOVE 13

//1. jitne sludge honge utne page phle hi ban jaynge ssg m aur ssr m , Agar ISR h to har 60 sec k baad data revalidate hoga
// Regenerate page in the background every 60 seconds
export const revalidate = 60;

// Generate static pages at build time for first 5 posts

export const dynamic = 'force-static'; // ⬅️ Ensures this is statically generated even if we have not visited the route in browser


// BUT IF:
// You don’t provide generateStaticParams()

// Or set dynamic = 'force-dynamic'

// Or use a fetch(..., { cache: 'no-store' })

// Then the route will be rendered dynamically at request time (SSR), and only when visited.


export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts?limit=5");
  const data = await res.json();

  return data.posts.map((post) => ({
    slug: post.id.toString(), // like /blog/1
  }));
}

// Render blog page
// export default async function BlogPage({ params }) {
//   const res = await fetch(`https://dummyjson.com/posts/${params.slug}`);
//   const post = await res.json();

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{post.title}</h1>
//       <p>{post.body}</p>
//       <p style={{ color: "gray", marginTop: "1rem" }}>
//         (Auto-refresh via ISR every 60 seconds)
//       </p>
//     </div>
//   );
// }
