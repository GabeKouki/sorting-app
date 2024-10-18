import React, { useState } from 'react'
import SortingVisualizer from './Components/SortingVisualizer'
import SortingAlgorithms from './Components/Functions'

const App = () => {
  const [arr, setArr] = useState([]);

  const sortMe = (length) => {
    const newArr = SortingAlgorithms.fillArray([], length);
    setArr(newArr);
    console.log(arr);
  }

  return (
    <>
      {arr.length <= 0 ? (
        <>
        {/*!//TODO Render all my Intro stuff here */}
        <h1>Should not show</h1>
        <button type='button' onClick={() => sortMe(20)}>Click Me</button>
        </>
      ) : (

        <div>
      <SortingVisualizer arr={arr} />
    </div>
  )}
  </>
  )
}


export default App
