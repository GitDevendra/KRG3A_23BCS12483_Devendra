import React, { useState } from "react";
import { useForm } from "./useForm";
import './App.css'
const App = () => {

  const { values, handleChange, resetForm } = useForm({
    title:"",
    priority:"Low"
  });

  const [tasks,setTasks] = useState([]);

  const handleSubmit=(e)=> {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: values.title,
      priority: values.priority
    };

    setTasks([...tasks,newTask]);

    resetForm();
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      
      <h2>EcoTrack Task Manager</h2>

      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Task Title</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Priority</label>
          <select
            name="priority"
            value={values.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit">Add Task</button>
      </form>

      <hr />

      <h3>Task List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>  |  {task.priority}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default App;
