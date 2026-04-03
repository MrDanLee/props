const Task = ({task, onDelete, onToggle}) => {

  return (
    <div>
      <span 
      onClick={() => onToggle(task.id)}
      style={{ textDecoration: task.completed? 'line-through' : 'none'}}
      >{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;