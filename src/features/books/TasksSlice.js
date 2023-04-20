const {createSlice}=require("@reduxjs/toolkit");
const {v4 : uuidv4}= require("uuid");
const initialTasks={
    tasks: [
        {id: uuidv4(), complete: "No", title: "Morning Walk" , note: "I will follow Rupsha ghat road for walking", time: "6.00"},
        {id: uuidv4(), complete: "No", title: "Breakfast" , note: "Before breakfast, I have to take a medicine", time: "8.00"}
    ]
};

export const tasksSlice=createSlice({
    name: "tasks",
    initialState: initialTasks,
    reducers: {
        showTasks: (state)=>state,
        addTask: (state,action)=>{
            state.tasks.push(action.payload);
        },
        updateTask: (state,action)=>{
            const {id,title,note,time}=action.payload
            const isTaskExist=state.tasks.filter((task)=>task.id===id);
            if(isTaskExist){
                isTaskExist[0].title=title;
                isTaskExist[0].note=note;
                isTaskExist[0].time=time;
            }
        },
        deleteTask: (state,action)=>{
            const id=action.payload;
            state.tasks=state.tasks.filter(task=>task.id!== id);
        },
        completeTask: (state,action)=>{
            const id=action.payload
            const isTaskExist=state.tasks.filter((task)=>task.id===id);
            if(isTaskExist){
                isTaskExist[0].complete="Yes";
            }
        }, 
    },
});
export const {showTasks, addTask,deleteTask,updateTask, completeTask}=tasksSlice.actions;
export default tasksSlice.reducer;