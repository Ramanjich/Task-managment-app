import React, { useContext, useState } from 'react'
import './EditForm.css'
import Modal from 'react-modal';
import './EditForm.css'
import { taskContext } from '../ContextAPI/Context';
import toast from 'react-hot-toast';

Modal.setAppElement('#root');
const customStyles = { overlay:{
  backgroundColor:'grey'
},
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'500px',
    height:'400px',
  },
};
const EditForm = (props) => {
  const{tasksList,setTaskslist}=useContext(taskContext)
  const{sendToEdit,isModelopen,setIsmodelopen}=props
  const{taskId,tName,tStatus}=sendToEdit
  const[EditTask,setEditTask]=useState(tName)
  const[EditStatus,setEditStatus]=useState(tStatus)
  
 // Back Button function to ruturn to home
  const onBackBtnClick=()=>{
    setIsmodelopen(false)
  }


// Save The task
  const onSaveTask=(e)=>{
    e.preventDefault()

    // Validations
    if(EditTask===""){
      return toast.error("Task name sould not be empty")
     }
     else if(EditTask.length >= 20){
       return toast.error("Task name charcters must be less than 20 ")
     }

    const EditArray=tasksList.map(eachTask=>{
      if(eachTask.taskId===taskId){
        return {...eachTask,tName:EditTask,tStatus:EditStatus}
      }else{
        return eachTask
      }
    })
    setTaskslist(EditArray)
    toast.success('Successfully Edited Task')
    setIsmodelopen(false)
  }

  return (
    <div>

<Modal isOpen={isModelopen} style={customStyles} onRequestClose={()=>{setIsmodelopen(false)}}>
<div className='edit-container'>
  <h2>Edit Task</h2>
  <form className='edit-form-container' onSubmit={onSaveTask}>
  <label htmlFor="edit-task-ele">TaskName</label>
  <input type='text' placeholder='Enter the Task' id="edit-task-ele" value={EditTask} onChange={(e)=>{setEditTask(e.target.value)}}/>
  <label htmlFor="status-ele-edit">Status</label>
  <select value={EditStatus} onChange={(e)=>{setEditStatus(e.target.value)}} id="status-ele-edit" 
      >
        <option value="To Do" >To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        
      </select>
      <div className='edit-btn-container'>
      
      <button type="button"className='back-btn' onClick={onBackBtnClick}>Back</button>
      <button type="submit"className='save-btn'>save</button>
      </div>
      
  </form>
</div>
</Modal>
    </div>
  )
}

export default EditForm