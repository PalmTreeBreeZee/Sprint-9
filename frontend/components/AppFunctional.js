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
const [messsage, setMessage] = useState(initialMessage)

  function getXY(r) {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    let count = 0
    let xY = '123'
    
    for(let i = 0; i < xY.length; i++){
      
      for(let j = 0; j < xY.length; j++){
    
        if(count === r){
          console.log(xY[i], xY[j])
          return [Number(xY[i]), Number(xY[j])]
        }
        count++  
      }
         
    }

  }

  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    return 'Coordinates('+ getXY(index)+ ')'
  }
 
  function reset() {
    // Use this helper to reset all states to their initial values.
    setIndex(initialIndex)
    setSteps(initialSteps)
    setEmail(initialEmail)
    setMessage(initialMessage)
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
    let arr = getXY(index)
    if (direction === 'left'){
      if(arr[0] <= 3){
       arr[0]--
       return arr
      } else return "You can't move left"
    }
    if (direction === 'right'){
      if(arr[0] <= 3){
       arr[0]++
       return arr
      } else return "You can't move right"
    }
    if (direction === 'up'){
      if(arr[1] <= 3){
       arr[1]--
       return arr
      } else return "You can't move up";
    }
      if (direction === 'down'){
        if(arr[1] <= 3){
         arr[1]++
         return arr
        } else return "You can't move down";
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
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
