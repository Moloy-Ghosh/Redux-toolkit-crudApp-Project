import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='nav-link'><h1> Home </h1></Link>
        <Link to="/show-tasks" className='nav-link'><h1> Show Tasks </h1></Link>
        <Link to="/add-task" className='nav-link'><h1> Add Task </h1></Link>
    </nav>
  )
}

export default Navbar
