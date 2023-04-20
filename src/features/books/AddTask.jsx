import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from "uuid";
import { addTask } from './TasksSlice';
const AddTask = () => {
  const [title,setTitle]=useState("")
  const [note,setNote]=useState("")
  const [time,setTime]=useState("")
  const dispatch=useDispatch();
  const navigate=useNavigate(); //jare button e click korle show book e nia jay

  const handleSubmit=(e)=>{
    e.preventDefault();
    const task={id: uuidv4(), complete:"No", title, note,time};
    dispatch(addTask(task));
    navigate("/show-tasks",{replace:true})
  }
  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Title: </label>
          <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label htmlFor='note'>Note: </label>
          <input type="text" id="note" name="author" value={note} onChange={(e)=>setNote(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label htmlFor='time'>Time: </label>
          <input type="time" id="time" name="time" value={time} onChange={(e)=>setTime(e.target.value)} required/>
        </div>
        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default AddTask
