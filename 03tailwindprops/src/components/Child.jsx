import React from 'react';

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.greeting} {props.name}</p>
    </div>
  );
};

export default Child;
