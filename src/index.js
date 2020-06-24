import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//history render component to show the last plays state
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the butttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

//btn component
const Button = ({onClick, text}) => (
  <button onClick={onClick}> {text} </button>
)

const App = (props) => {
  //states for left, right and all clicks used
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  //handlers for left/right click and update
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))