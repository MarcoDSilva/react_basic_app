import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => (
  <>
    <p>{props.part} {props.exercises}</p>
  </>
)

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises[0]} />
      <Part part={props.part2} exercises={props.exercises[1]} />
      <Part part={props.part3} exercises={props.exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.exercises.reduce((a,b) => a + b)}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application developlment'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using prop to pass data'
  const part3 = 'State of a component'
  const exercises = [10,7,14]

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));