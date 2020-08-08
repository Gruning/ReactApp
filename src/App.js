import React from 'react';
import GoalList from './components/GoalList'
import './App.css'
const App =()=>{

  const courSeGoals = [
    {id:'cg1', text:'complete MERN course'},
    {id:'cg2', text:'complete Net5 course'},
    {id:'cg3', text:'complete Python course'},
  ]

  return(
  <div className="course-goals">
    <h2>Course Goals</h2>
    <GoalList goals={courSeGoals}/>
  </div>
  ) 
}
export default App;
