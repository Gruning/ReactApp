import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'
import './App.css'
const App =()=>{
  const [courseGoals , setCourseGoals] = useState([
    {id:'cg1', text:'complete MERN course'},
    {id:'cg2', text:'complete Net5 course'},
    {id:'cg3', text:'complete Python course'},
  ])

  const addNewGoalHandler = newGoal =>{
    //setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals(previousCourseGoals=> previousCourseGoals.concat(newGoal))
  }
  return(
  <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal = {addNewGoalHandler} />
    <GoalList goals={courseGoals}/>
  </div>
  ) 
}
export default App;
