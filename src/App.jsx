import React, { useEffect, useState } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import {taskContext} from './ContextAPI/Context'
import toast, { Toaster } from 'react-hot-toast';

import './App.css'
const localStTaskList=localStorage.getItem("ListItem")

const App = () => {
  const [tasksList,setTaskslist]=useState(JSON.parse(localStTaskList) || [])
  useEffect(()=>{
    localStorage.setItem("ListItem",JSON.stringify(tasksList))
  },[tasksList])
  return (
    
    <div className='app-container'>
      <taskContext.Provider value={{tasksList,setTaskslist}}>
      <h1>Task Managment App</h1>
      <TaskForm/>
      <TaskList/>
      </taskContext.Provider>
      <Toaster />
    </div>
    
    
    
  )
}

export default App