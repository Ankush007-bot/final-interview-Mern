// Core CSS (Expected in MERN Interviews)

// Explain the CSS Box Model and how it affects layout.

// Difference between flexbox and grid? When do you use each?


// What is position: relative / absolute / fixed / sticky?

// Difference between display: block, inline, inline-block?

// Explain z-index 

// What is the difference between visibility: hidden and display: none?

// What are pseudo-classes vs pseudo-elements?

// What is em, rem, %, vw, vh? When to use which?



// Modern CSS (Common in React/MERN Interviews)

//explain flexbox

// How do you implement responsive design with media queries?

// Difference between flex: 1 vs flex-grow, flex-shrink, flex-basis?

// What is grid-auto-flow and auto-fit/auto-fill in CSS Grid?


// What is clamp(), min(), and max() in CSS?

// Performance & Architecture




// Real-World Practical Questions

// How would you center a div horizontally and vertically using flexbox?

// Create a responsive navbar with CSS only. Explain your steps.

// How do you make a responsive grid of cards?

// How do you style components differently based on props in React (CSS-in-JS)?

// How to create a sticky header?

// How do you prevent layout shifts when loading images?





///Difference between flexbox and grid? When do you use each?
// Flexbox

// One-dimensional layout system
// → controls layout in a single direction (row or column).

// Best for aligning items, spacing, centering, navbars, buttons, cards in a row.

// Use Flexbox when:

// You care about layout in one direction.

// You need alignment (center, space-between, etc.).

// Content size is dynamic.

// CSS Grid

// Two-dimensional layout system
// → controls rows and columns simultaneously.

// Best for full page layouts, dashboards, galleries, complex grids.

// Use Grid when:

// You need a full layout structure.

// You design both rows + columns at the same time.

// The layout is matrix-like.

// Quick rule:
// ➡ Flexbox = 1D (row OR column)
// ➡ Grid = 2D (rows AND columns)

// If you want, I can add a simple code example comparing both.

// You said:
// yes
// ChatGPT said:

// Here are simple side-by-side code examples — perfect for interviews.

// 1. Flexbox Example (1D layout)

// Layout items in a row and space them evenly.

// <div class="flex-container">
//   <div class="item">1</div>
//   <div class="item">2</div>
//   <div class="item">3</div>
// </div>

// <style>
// .flex-container {
//   display: flex;
//   justify-content: space-between;
//   background: #eee;
//   padding: 20px;
// }

// .item {
//   background: #cde;
//   padding: 20px;
// }
// </style>


// ✔ Controls items horizontally only
// ✔ Great for navbars, toolbars, card rows, buttons, etc.

// 2. Grid Example (2D layout)

// Layout items into rows + columns together.

// <div class="grid-container">
//   <div class="item">1</div>
//   <div class="item">2</div>
//   <div class="item">3</div>
//   <div class="item">4</div>
// </div>

// <style>
// .grid-container {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: auto auto;
//   gap: 20px;
//   background: #eee;
//   padding: 20px;
// }

// .item {
//   background: #dec;
//   padding: 20px;
// }
// </style>


// ✔ Controls rows and columns
// ✔ Great for dashboards, galleries, section layouts.


// grid-template-columns: repeat(2, 1fr);

// This means:

// Create 2 columns

// Each column = 1fr (one fraction of available space)

// So the layout becomes:

// |   1fr   |   1fr   |


// Both columns share space equally.

// grid-template-rows: auto auto;

// This means:

// Create 2 rows

// Each row height = auto → automatically adjust based on content

// So the layout becomes:

// Row 1 → height depends on its content  
// Row 2 → height depends on its content

// Final Mental Picture
// 2 columns → equal width  
// 2 rows → content decides height

// | 1fr | 1fr |
// | 1fr | 1fr |
// (rows auto)



//What is position: relative / absolute / fixed / sticky?
// 1. position: relative
// <div class="box relative">Relative box</div>

// <style>
// .box {
//   width: 150px;
//   height: 80px;
//   background: lightblue;
//   margin: 20px;
// }

// .relative {
//   position: relative;
//   top: 20px;   /* moves down 20px */
//   left: 30px;  /* moves right 30px */
// }
// </style>


// ✔ Keeps its original space but shifts visually.

// 2. position: absolute
// <div class="wrapper">
//   <div class="box absolute">Absolute box</div>
// </div>

// <style>
// .wrapper {
//   width: 200px;
//   height: 200px;
//   background: lightgray;
//   position: relative; /* reference point */
// }

// .absolute {
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   background: lightcoral;
// }
// </style>


// ✔ Positioned relative to .wrapper because it has position: relative.

// 3. position: fixed
// <div class="fixed-header">Fixed Header</div>

// <style>
// .fixed-header {
//   position: fixed;
//   top: 0;
//   width: 100%;
//   background: black;
//   color: white;
//   padding: 10px;
// }
// </style>


// ✔ Stays at the top even when you scroll.

// 4. position: sticky
// <div class="sticky-header">Sticky Header</div>

// <style>
// .sticky-header {
//   position: sticky;
//   top: 0;
//   background: gold;
//   padding: 10px;
// }
// </style>


// ✔ Acts normal until you scroll; then it sticks to the top.


//Difference between display: block, inline, inline-block?
// display: block

// Takes full width.

// Starts on a new line.

// Can set width/height/margins/padding freely.

// Examples: div, p, h1 …

// display: inline

// Takes only the width of its content.

// Does NOT start on a new line.

// Cannot set width/height.

// Horizontal padding/margins work; vertical don’t push elements.

// Examples: span, a, strong …

// display: inline-block

// Flows like inline (doesn’t break the line).

// Behaves like block (can set width/height/margins/padding).

// Examples: Buttons, small cards, nav items, etc.




//Z-Index
// z-index decides which element appears on top of others along the z-axis (front vs back).

// Higher z-index → element is in front

// Lower z-index → element is behind

// Works only on positioned elements (relative, absolute, fixed, sticky)

// Example:

// <div class="box1">Box 1</div>
// <div class="box2">Box 2</div>

// <style>
// .box1 {
//   position: relative;
//   z-index: 1;
//   background: red;
//   width: 100px;
//   height: 100px;
// }

// .box2 {
//   position: relative;
//   z-index: 2;
//   background: blue;
//   width: 100px;
//   height: 100px;
//   margin-top: -50px; /* overlap */
// }
// </style>


// Here, Box 2 (blue) will appear on top of Box 1 (red) because z-index: 2 > 1.






// What is the difference between visibility: hidden and display: none?

// 1. visibility: hidden

// Element is not visible, but still takes up space in the layout.

// Layout of other elements does not change.

// div {
//   visibility: hidden;
// }


// ✔ Good for temporary hiding without affecting layout.

// 2. display: none

// Element is removed from the layout completely.

// Other elements move to fill the space.

// div {
//   display: none;
// }


// ✔ Good for completely hiding elements, e.g., tabs, dropdowns.




////What are pseudo-classes vs pseudo-elements?

// 1. Pseudo-classes

// Define a special state of an element.

// Use one colon :

// Examples: :hover, :focus, :nth-child(), :first-child

// button:hover {
//   background: blue;
//   color: white;
// }


// ✔ Applied when the element is in a particular state, not a new element.

// 2. Pseudo-elements

// Style part of an element or create virtual elements.

// Use two colons :: (though one colon works in older browsers)

// Examples: ::before, ::after, ::first-letter, ::first-line

// p::first-letter {
//   font-size: 2em;
//   color: red;
// }

// p::before {
//   content: "Note: ";
//   font-weight: bold;
// }


// ✔ Creates or styles a part of the element.






// What is em, rem, %, vw, vh? When to use which?
// 1. em

// Relative to the font-size of the parent.

// Example: If parent = 20px, then 2em = 40px.

// Use when:
// You want spacing/sizes to scale with the parent element.

// 2. rem

// Relative to the root (html) font-size.

// Example: If html = 16px, then 1rem = 16px.

// Use when:
// You want consistent sizing across the page (preferred for modern CSS).

// 3. %

// Relative to the parent element’s size (width/height depending on property).

// Use when:
// You want layout to scale based on container size (responsive widths).

// 4. vw (viewport width)

// 1vw = 1% of the viewport's width.

// Use when:
// You want elements or text to scale with screen width.

// 5. vh (viewport height)

// 1vh = 1% of the viewport's height.

// Use when:
// You want full-screen sections (e.g., height: 100vh for hero banners).

// 1. em example (relative to parent font-size)
// <div class="parent">
//   Parent text
//   <div class="child">Child text</div>
// </div>

// <style>
// .parent {
//   font-size: 20px;
// }

// .child {
//   font-size: 2em;  /* 2 × 20px = 40px */
// }
// </style>

// 2. rem example (relative to root font-size)
// <style>
// html {
//   font-size: 16px;
// }

// .box {
//   font-size: 2rem; /* 2 × 16px = 32px */
// }
// </style>

// <div class="box">This is 2rem</div>

// 3. % example (relative to parent width)
// <div class="container">
//   <div class="box"></div>
// </div>

// <style>
// .container {
//   width: 400px;
//   background: lightgray;
// }

// .box {
//   width: 50%;     /* 50% of 400px = 200px */
//   height: 50px;
//   background: blue;
// }
// </style>

// 4. vw example (viewport width)
// .hero-text {
//   font-size: 5vw; /* scales with screen width */
// }

// 5. vh example (viewport height)
// .section {
//   height: 100vh; /* full screen height */
//   background: black;
//   color: white;
// }





//How would you center a div horizontally and vertically using flexbox?

// Use Flexbox on the parent:

// .parent {
//   display: flex;
//   justify-content: center; /* horizontal */
//   align-items: center;     /* vertical */
//   height: 100vh;           /* or any height */
// }


//HTML:

<div class="parent">
  <div class="child">Centered</div>
</div>


// ✔ justify-content → centers horizontally
// ✔ align-items → centers vertically
// ✔ height: 100vh ensures vertical centering on full screen.


