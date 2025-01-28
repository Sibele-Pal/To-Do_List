import React from "react";
export default function Index(){
    return (
        <div className="container">
        <h1>To-Do List</h1>
        <input type="text" id="new-task" placeholder="Add a new task" />
        <button id="add-task">Add Task</button>
        <ul id="task-list" />
        <img src="https://th.bing.com/th/id/OIP.miiYjn5yqTjWNF-6mU7RgwHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7" id="bg" className="img-fluid" alt="Image" />
    
      </div>
      
)
}