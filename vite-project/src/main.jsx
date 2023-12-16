// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
 
// function MyApp(){
//   return(
//     <>
//       <p>hii abhishek learning react</p>
//     </>
//   )
// }

// // const reactElement = {
// //   type: 'a',
// //   props: {
// //       href: 'https://google.com',
// //       target: '_blank'
// //   },
// //   children: 'Click me to visit Google'
// // };thisbis our own way of creating react element
// // but react doent understands this Cod
// // so ther is a special syntax that we need to follow

// const anotherElement =(
//   <a href='www.google.com' target='_blank'>Visiit google</a>
// )

// const ReactElement = React.createElement(
//   'a',
//   {href: 'www.google.com',target: '_blank'},
//   'click me to visit google',
//   anotherElement
// )


// // const customReactElement = React.createElement(reactElement.
// //   type, reactElement.props, reactElement.children);

// ReactDOM.createRoot(document.getElementById('root')).render(
//  ReactElement
// )


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

function MyApp() {
  return (
    <>
      <p>Hi Abhishek, learning React</p>
    </>
  );
}

// Creating a React element using JSX syntax
const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Visit Google</a>
);

// This React element uses React.createElement with nested elements
const ReactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit Google',
  anotherElement // Including anotherElement as a nested element
);

// Rendering ReactElement using ReactDOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactElement />
    <MyApp />
  </React.StrictMode>
);
