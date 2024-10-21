import React, { useState } from 'react'
import SortingVisualizer from './Components/SortingVisualizer'
import SortingAlgorithms from './Components/Functions'
import WelcomePage from './Components/WelcomePage';

const App = () => {
  const [arr, setArr] = useState([]);
  const [start, setStart] = useState(false);


  const startApp = () => {
    setStart(true);
    console.log(start)
  }
  const takeAStep = () => {
    let newArr = [...arr]
    newArr = SortingAlgorithms.stepOnce(newArr);
    setArr(newArr);
  }

  const flipMe = () => {
    let newArr = [...arr]
    newArr = SortingAlgorithms.flipArray(newArr);
    setArr(newArr);
  }

  return (
    <>
      {start === false ? (
        <>
        {/*!//TODO Render all my Intro stuff here */}
        <WelcomePage startApp={startApp} />
        {/* <h1>Should not show</h1>
        <button type='button' onClick={() => sortMe(50)}>Click Me</button> */}
        </>
      ) : (

        <div>
      <SortingVisualizer arr={arr} />
      <button onClick={() => takeAStep()}>Take 1 Step</button>
      <button onClick={() => flipMe()}>Flip</button>
    </div>
  )}
  </>
  )
}


export default App
