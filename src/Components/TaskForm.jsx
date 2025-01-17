import React, { useContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './TaskForm.css'
import { taskContext } from '../ContextAPI/Context'
import toast from 'react-hot-toast';

const TaskForm = () => {
  const [taskObj,setTaskobj]=useState({taskId:"",tName:"",tStatus:"To Do"}) 
  const{tasksList,setTaskslist,darkMode}=useContext(taskContext)

  //Create The Task Function
  const onSubmitClick=(e)=>{
    e.preventDefault()

    // Validations
    if(taskObj.tName===""){
     return toast.error("Task name should not be empty")
    }
    else if(taskObj.tName.length >= 20){
      return toast.error("Task name charcters must be less than 20 ")
    }

    setTaskslist([...tasksList,{...taskObj,taskId:uuidv4()}])
    setTaskobj({tName:"",tStatus:"To Do"})
    
    toast.success('Successfully Created Task')
  }
  
  return (
    <form className={`task-form-container ${darkMode?'dark-form':''}`} onSubmit={onSubmitClick}>
      
      <label htmlFor='TaskInput' className={`'label-style' ${darkMode ?'dark-label':""}`}>Task Name</label>
      
      <input type='text' className={`${darkMode?'dark-input':'input-ele'}`} placeholder='Enter task name' id="TaskInput" value={taskObj.tName} onChange={(e)=>{
         setTaskobj({...taskObj,tName:e.target.value})
      }}/>
      
      
      <label htmlFor='status-ele' className={`'label-style' ${darkMode ?'dark-label':""}`}>Status</label>
      
      <select className={`${darkMode?'dark-select':'select-ele'}`} value={taskObj.tStatus} id="status-ele"  onChange={(e)=>{
        setTaskobj({...taskObj,tStatus:e.target.value})
      }}>
        <option value="To Do" selected>To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Waiting Client">Waiting Client</option>
        
      </select>
      <button type="submit"className='create-btn'>Create</button>
    </form>
  )
}

export default TaskForm