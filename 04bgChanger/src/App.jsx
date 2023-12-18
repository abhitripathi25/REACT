


// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     <>
//       <div className="w-full h-screen duration-200"
//       style={{backgroundColor: color}}
//       >
//         <div className="fixed flex flex-wrap
//         justify-center bottom-12 inset-x-0 px-2">
//           <div className="flex flex-wrap justify-center
//           gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//           className="outline-none px-4 py-1
//           rounded-full text-white shadow-lg"
//           style={{backgroundColor: "red"}}
//           >Red </button>
//           <button
//           className="outline-none px-4 py-1
//           rounded-full text-white shadow-lg"
//           style={{backgroundColor: "green"}}
//           >green </button>
//           <button
//           className="outline-none px-4 py-1
//           rounded-full text-white shadow-lg"
//           style={{backgroundColor: "blue"}}
//           >blue</button>
//           <button
//           className="outline-none px-4 py-1
//           rounded-full text-white shadow-lg"
//           style={{backgroundColor: "yellow"}}
//           >yellow </button>
//           <button
//           className="outline-none px-4 py-1
//           rounded-full text-white shadow-lg"
//           style={{backgroundColor: "indigo"}}
//           >indigo </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => changeColor('red')}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => changeColor('green')}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => changeColor('blue')}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => changeColor('yellow')}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "indigo" }}
              onClick={() => changeColor('indigo')}
            >
              Indigo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



