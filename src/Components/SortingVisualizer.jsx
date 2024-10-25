import React from 'react'
import './SortingVisualizer.css'
import { useState } from 'react';
// import { useEffect } from 'react';
import SortingAlgorithms from './Functions';

const SortingVisualizer = () => {

    const [length, setLength] = useState(0);
    const [arr, setArr] = useState([]);
    const [speed, setSpeed] = useState(1);
    const [steps, setSteps] = useState(0);
    const [comparisons, setComparisons] = useState(0);

    const newArray = (length) => {
        setArr(SortingAlgorithms.generateArray([], length));
    }

  return (
    <>
    <div className='sorting-container'>
      {/* <h1>Hello</h1> */}
      <input type='number' value={length} onChange={(e) => setLength(e.target.value)} />
      <button onClick={() => newArray(length)}>Generate New Array</button>

      <div className='bar-container'>
      {arr.map((value, index) => {
        const barColor = "red";
        return (
          <div 
          className="array-bar"
          key={index}
          style={{
            backgroundColor: barColor,
            height: `${value * 6}px`,
            border: "1px solid black",
          }}
          
          > </div>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default SortingVisualizer
