import './App.css';
import { useState } from "react";
import Task from "./components/Task.jsx";
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false}
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }


  const toggleTask = (taskID) => {
    setTasks(tasks.map((task) =>
      task.id === taskID ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <>
    <div>
      <h1>Lista de tareas</h1>

      <AddTaskForm onAdd={addTask}/>

      {tasks.map((task) => (
        <Task 
        task ={task} 
        onDelete={deleteTask}
        onToggle={toggleTask}
        />
        ))}
    </div>
    </>
  );
};

export default App;
