import React, { useEffect, useState } from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import {taskContext} from './ContextAPI/Context'
import toast, { Toaster } from 'react-hot-toast';
import { CiDark } from "react-icons/ci";

import './App.css'
const localStTaskList=localStorage.getItem("ListItem")

const App = () => {
  const [tasksList,setTaskslist]=useState(JSON.parse(localStTaskList) || []) 
  const [darkMode,setDarkmode]=useState(false)

  //localstorage
  useEffect(()=>{
    localStorage.setItem("ListItem",JSON.stringify(tasksList))
  },[tasksList])


  return (
    
    <div className={`app-container ${darkMode?"dark-mode":""}`}>
      <taskContext.Provider value={{tasksList,setTaskslist,darkMode,setDarkmode}}>
      <nav>
      <h1>TaskTrek </h1>
      <CiDark onClick={()=>setDarkmode(prev=>!prev)} className={darkMode?"dark-mode-circle":"dark-circle"}/>
      </nav>
     
      <TaskForm/>
      <TaskList/>
      </taskContext.Provider>
      <Toaster />
    </div>
    
    
    
  )
}

export default App