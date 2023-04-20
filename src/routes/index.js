import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import TasksView from '../features/books/TasksView';
import AddTask from '../features/books/AddTask';
import EditTask from '../features/books/EditTask';

const Index = () => {
  return <BrowserRouter>
  <Navbar />
    <main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/show-tasks" element={<TasksView/>} />
            <Route path="/add-task" element={<AddTask/>} />
            <Route path="/edit-task" element={<EditTask/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    </main>
    <Footer />
  </BrowserRouter>
}

export default Index;
