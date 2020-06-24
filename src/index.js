import React, {useState} from 'react';
import ReactDOM from 'react-dom';

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
        <button onClick={handleLeftClick}> left </button>
        <button onClick={handleRightClick}> right </button>
        {right}
        <p>{allClicks.join(' ')}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))