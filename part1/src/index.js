import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content=(props) =>{
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Footer = () => {
  return (
    <div>
      App created by <a href="https://github.com/BeatrizPR">Beatriz PR</a>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 