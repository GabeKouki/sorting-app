import React from 'react'
import './SortingVisualizer.css'

const SortingVisualizer = ({ arr }) => {

  return (
    <>
    <div className='sorting-container'>
      <h1>Hello</h1>
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
