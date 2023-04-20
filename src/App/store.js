import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/books/TasksSlice";



const store = configureStore({
    reducer:{
        tasksReducer: tasksReducer
    }
})
export default store;