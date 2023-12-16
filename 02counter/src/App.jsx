import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 5;
  // const addValue = () => {
  //   console.log('random value :',Math.random())
  // }
  const [counter, setCounter] = useState(5); // Using useState to manage 'counter'

  const addValue = () => {
    if (counter < 20) {
      const newValue = counter + 1;
      setCounter(newValue); // Update 'counter' state with the new value
    }
  };
  

  const removeValue = () => {
    if (counter > 0) {
      const newValue = counter - 1;
      setCounter(newValue); // Update 'counter' state with the new value
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value : {counter}</h3>
      
      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
