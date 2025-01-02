import React, { useContext, useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import './TaskCard.css'
import { taskContext } from '../ContextAPI/Context';
import EditForm from './EditForm';
import toast from 'react-hot-toast';



const TaskCard = (props) => {
  const{tasksList,setTaskslist}=useContext(taskContext)
  const[isModelopen,setIsmodelopen]=useState(false)
  const[sendToEdit,setSendtoedit]=useState("")

  const{eachEle}=props 
  const{taskId,tName}=eachEle 

 



  // onClick fro Edit task

  const onEditBtnClick=()=>{
    setIsmodelopen(true)
    setSendtoedit(eachEle)
    
    
  }

  //Function for delete task
  const onTaskDelete=()=>{
    const afterDeleteTask=tasksList.filter(eachItem=>{
      if(eachItem.taskId !==taskId){
        return eachItem
      }
    })
    setTaskslist(afterDeleteTask)
    toast.success('Successfully deleted Task')
  }

  return (
    <div  className='cards' ><p>{tName}</p>
    <div>
    <CiEdit className='icon-edit' onClick={onEditBtnClick}/>
    <MdOutlineDelete className='icon-del'onClick={onTaskDelete}/>
    {isModelopen && <EditForm isModelopen={isModelopen} setIsmodelopen={setIsmodelopen}sendToEdit={sendToEdit}/>}
    </div>
    
    </div>
  )
}

export default TaskCard