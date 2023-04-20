import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateTask } from './TasksSlice';

const EditTask = () => {
  const location =useLocation(); //ager state thake oi 3 ta value asbe
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [id,]=useState(location.state.id);
  const [title,setTitle]=useState(location.state.title);
  const [note,setNote]=useState(location.state.note);
  const [time,setTime]=useState(location.state.time);
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateTask({id,title,note,time}))
    navigate("/show-tasks",{replace:true});
  }
  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Title: </label>
          <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label htmlFor='note'>Note: </label>
          <input type="text" id="note" name="note" value={note} onChange={(e)=>setNote(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label htmlFor='time'>Time: </label>
          <input type="time" id="time" name="time" value={time} onChange={(e)=>setTime(e.target.value)} required/>
        </div>
        <button type='submit'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTask;
