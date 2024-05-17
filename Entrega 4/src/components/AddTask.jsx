import { useState } from "react";

function AddTask({ addTask }) {

  const [task, setTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(event) => setTask(event.target.value)} 
        placeholder="Ingrese tarea..." 
      />
      <button type="submit">AGREGAR</button>
    </form>
  );
}

export default AddTask;
