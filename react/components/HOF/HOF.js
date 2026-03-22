import React from 'react';

// A Higher-Order Component (HOC) is a pattern in React that allows you to reuse component logic.
//  It’s a function that takes a component and returns a new component with additional props or behavior.

// Higher-Order Function that wraps a component with a border
const withBorder = (Component) => (props) => {
    return (
        <div style={{ border: '2px solid blue', padding: '10px' }}>
            <Component {...props} />
        </div>
    );
};


// function withBorder(Component) {
//     return function WrappedComponent(props) {
//       return (
//         <div style={{ border: '2px solid blue', padding: '10px' }}>
//           <Component {...props} />
//         </div>
//       );
//     };
//   }
  
const withBorderTwo = (Component) => (props) => {
    return (
        <div style={{ border: '10px solid blue', padding: '10px', font:'message-box'}}>
            <Component {...props} />
        </div>
    );
};

// Simple component
const Message = ({ text }) => <div>{text}</div>;


// Wrapped component
const MessageWithBorder = withBorder(Message);
const MessageWithBorderTwo= withBorderTwo(Message)

// here message is a component
// withBorderTwo is a function which is enhancing the component

//Yes, the withBorder function in your example is indeed a Higher-Order Function (HOF) because it takes a React
//component as an argument and returns a new enhanced component. Specifically, it is a Higher-Order Component (HOC) in React.

function HOF() {
    return (
        <div>
            <MessageWithBorder text="Hello, this is wrapped!" />
            <MessageWithBorderTwo text={<h1>I Border two</h1>}/>

        </div>
    );
}

export default HOF;





// import React, { useState, useEffect } from 'react';

// // Higher-Order Component
// const withLoading = (WrappedComponent) => {
//   return (props) => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       setTimeout(() => {
//         setLoading(false);  // Simulate loading delay
//       }, 2000);
//     }, []);

//     if (loading) {
//       return <div>Loading...</div>;  // Display loading state
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// // Regular component
// const MyComponent = () => {
//   return <div>Data has been loaded!</div>;
// };

// // Wrap MyComponent with HOC
// const MyComponentWithLoading = withLoading(MyComponent);

// export default MyComponentWithLoading;
