import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { completeTask, deleteTask } from './TasksSlice';

const TasksView = () => {
    const tasks=useSelector((state)=>state.tasksReducer.tasks);
    const date=new Date().getDate();
    const month=new Date().getMonth();
    const year=new Date().getFullYear();
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
      dispatch(deleteTask(id));
    }
    const handleComplete=(id)=>{
      dispatch(completeTask(id));
    }
  return (
    <div>
      <h2>Today's list of work<br/>{date+"/"+(month+1)+"/"+year}</h2>
      <table>
        <thead>
          <tr>
            <th>Complete ?</th>
            <th>Work Title</th>
            <th>Note</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task)=>{
            const {id,complete, title, note,time}=task;
            return <tr key={id}>
              <td>{complete}</td>
              <td>{title}</td>
              <td>{note}</td>
              <td>{time}</td>
              <td>
                <Link to="/edit-task" state={{id, title, note }}> 
                  <button>Edit</button>
                </Link>
                <button onClick={()=>{handleDelete(id)}}>Delete</button>
                <button onClick={()=>{handleComplete(id)}}>Complete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TasksView
