import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
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

const Total=(props) =>{
  return(
    <p>Number of exercices {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
  const part1 ={
    name:'Fundamentals of React',
    exercises:10
  }
  
  const part2 ={
    name:'Using props to pass data',
    exercises:7
  } 

  const part3 ={
    name:'State of a component',
    exercises: 14
  } 

  return (
    <div>
      <Header course={course} />
      <Content part={part1.name} exercises={part1.exercises} />
      <Content part={part2.name} exercises={part2.exercises} />
      <Content part={part3.name} exercises={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 