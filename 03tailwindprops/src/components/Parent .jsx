import React from 'react';
import Child from './Child.jsx'; // Assuming Child component is in a separate file

const Parent = () => {
  const greeting = 'Hello,';
  const name = 'John';

  return (
    <div>
      <h1>Parent Component</h1>
      <Child greeting={greeting} name={name} />
    </div>
  );
};

export default Parent;
