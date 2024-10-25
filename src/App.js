import React, { useEffect, useState } from 'react'
import SortingVisualizer from './Components/SortingVisualizer'
import WelcomePage from './Components/WelcomePage';

const App = () => {
  const [start, setStart] = useState(false);

  const startApp = () => {
    setStart(true);
  }

  return (
    <>
      {start === false ? (
        <>
        <WelcomePage startApp={startApp} />
        </>
      ) : (
        <div>
      <SortingVisualizer />
    </div>
  )}
  </>
  )
}


export default App
