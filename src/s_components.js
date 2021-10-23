import React, { useState } from 'react'



const App = () => {
  const [ counter, setCounter ] = useState(0) 
  //const [clicks, setClicks] = useState({left: 0, right: 0})
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    console.log('')

  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  
  
  }

  

 /* const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  } */


  /*const handleClick = () => {
    console.log('clicked')
  }*/

  const increaseByOne = () => setCounter(counter + 1)
  
  const decreaseByOne = () => setCounter(counter - 1)

  const setToZero = () => setCounter(0)
  
  /*setTimeout (
      () => setCounter(counter + 1),
      1000)*/

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


  return (
    <div>
    <Display counter={counter} />

    <Button onClick={increaseByOne} text='plus' />
    <Button onClick={decreaseByOne}  text='minus' />
    <Button onClick={setToZero} text='zero' />

    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      {/*<p>{allClicks.join(' ')}</p>*/}
      <History allClicks={allClicks} />
    </div>


    </div>
  )
}

export default App