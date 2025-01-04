import React, { useContext } from 'react'
import TaskCard from './TaskCard'
import './TaskList.css'
import { taskContext } from '../ContextAPI/Context'



const statuses=[
  "To Do","In Progress","Completed","Waiting Client"
]

const TaskList = () => {

   const{tasksList,setTaskslist,darkMode}=useContext(taskContext)

   const EachColumn=statuses.map(s=>{
    const fArrayColumn=tasksList.filter(t=>t.tStatus===s);
    return {
        status:s,columnObj:fArrayColumn
    }
})

   

  //  // Filter function: filter according to status
  //  const todoList=tasksList.filter(item=>{
  //   if(item.tStatus==="To Do"){
  //     return item
  //   }
  //  })

  //  const progressList=tasksList.filter(item=>{
  //   if(item.tStatus==="In Progress"){
  //     return item
  //   }
  //  })
    
  //  const compltedList=tasksList.filter(item=>{
  //   if(item.tStatus==="Completed"){
  //     return item
  //   }
  //  })
  //  const clientList=tasksList.filter(item=>{
  //   if(item.tStatus==="Waiting Client"){
  //     return item
  //   }
  //  })
  const handleDrop=(e,taskStatus)=>{
    const dragId=e.dataTransfer.getData("id")
    const updateTask=tasksList.map(each=>{
      if(each.taskId===dragId){
        return{...each,tStatus:taskStatus}
      }
      else{
        return each
      }
    })
    setTaskslist(updateTask)
  }
  
 
  return (
    <div className='task-list-container'>
      <h2>Tasklists</h2>
      <div className='list-container' >
        {EachColumn.map(col=>(
          <div onDrop={(e)=>handleDrop(e,col.status)} onDragOver={(e)=>{e.preventDefault()}}>

            <div className={`${darkMode? 'dark-min-container':'min-container'}`} >
        <h3 style={{color:darkMode?'white':''}}>{col.status} <span>{col.columnObj.length}</span></h3>
        {col.columnObj.map(eachEle=><TaskCard key={eachEle.id} eachEle={eachEle}/>)}
        </div>
          </div>
        )

        )}
            
        {/* <div className='tdlist-container'>
        <h4 className='to-do-header'>To Do <span>{todoList.length}</span></h4>
        {(todoList.length !==0 && todoList[0].tNmame !=="")?todoList.map(eachEle=><TaskCard key={eachEle.id} eachEle={eachEle}/>):null}
        
        </div>
        <div className='prolist-container' >
        <h4 className='progress-header'>In Progress <span>{progressList.length}</span></h4>
        {progressList.map(eachEle=><TaskCard key={eachEle.id} eachEle={eachEle}/>)}
        </div>
        <div className='comlist-container'>
        <h4 className='complete-header'>Completed <span>{compltedList.length}</span></h4>
        {compltedList.map(eachEle=><TaskCard key={eachEle.id} eachEle={eachEle}/>)}
        </div>
        <div className='clentist-container'>
        <h4 className='client-header'>Waiting Client <span>{clientList.length}</span></h4>
        {clientList.map(eachEle=><TaskCard key={eachEle.id} eachEle={eachEle}/>)}
        </div> */}
      </div>
      
    </div>
  )
}

export default TaskList