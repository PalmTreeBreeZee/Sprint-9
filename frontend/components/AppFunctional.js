import React from 'react'
import {useState} from 'react'

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at



export default function AppFunctional(props) {
const [index, setIndex] = useState(initialIndex)
const [steps, setSteps] = useState(initialSteps)
const [email, setEmail] = useState(initialEmail)
const [message, setMessage] = useState(initialMessage)
const [x, setX] = useState(2)
const [y, setY] = useState(2)

  function getXY(r) {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    let count = 0
    let xY = '123'
    
    for(let i = 0; i < xY.length; i++){
      
      for(let j = 0; j < xY.length; j++){
    
        if(count === r){
          return [Number(xY[j]), Number(xY[i])]
        }
        count++  
      }
         
    }
  
  }
 
  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    return 'Coordinates ('+ getXY(index)+ ')'
  }
 
  function reset() {
    // Use this helper to reset all states to their initial values.
    setIndex(initialIndex)
    setSteps(initialSteps)
    setEmail(initialEmail)
    setMessage(initialMessage)   
    console.log('reset')
  }
  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.

    let arr = getXY(index)
    if (direction === 'left'){
      if (index === 0 || index === 3 || index === 6) return setIndex(index)
       else return [setIndex(index - 1), setSteps(steps + 1)]
      } 
    
    if (direction === 'right'){
      if (index === 2 || index === 5 || index === 8) return setIndex(index)
       else return [setIndex(index + 1), setSteps(steps + 1)]
       } 
      
    
    if (direction === 'up'){
      if (index - 3 < 0) return setIndex(index)
       else return [setIndex(index - 3), setSteps(steps + 1)]
    }
      if (direction === 'down'){
         if(index + 3 > 8) return setIndex(index)
         return [setIndex(index + 3), setSteps(steps + 1)]

      }
    
  }

  function move(evt) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    // You will need this to update the value of the input.
    
    
   
  }

  function onSubmit(evt) {
    // Use a POST request to send a payload to the server.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={() => getNextIndex('left')}>LEFT</button>
        <button id="up" onClick={() => getNextIndex('up')}>UP</button>
        <button id="right" onClick={() => getNextIndex('right')}>RIGHT</button>
        <button id="down" onClick={() => getNextIndex('down')}>DOWN</button>
        <button id="reset"onClick={() => reset()}>reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email" onChange={() => onChange()}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
