import { useState } from "react";

const AddTaskForm = ({onAdd}) => {

  const [text, setText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
    alert("Agregaste una nueva tarea");
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Agrega una tarea"
      value={text}
      onChange={(e) => setText(e.target.value)}/>
      <button>Agregar</button>
    </form>
  );
};

export default AddTaskForm;