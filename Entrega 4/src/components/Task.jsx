function Task({ task, toggleTaskCompletion, deleteTask }) {

  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const taskStyle = () => {
    return {
      textDecoration: task.completed ? 'line-through' : 'none',
      color: task.completed ? 'lightblue' : 'black',
      cursor: 'pointer'
    };
  };

  return (
    <div>
      <span 
        onClick={handleToggleCompletion} 
        style={taskStyle()}
      >
        {task.text}
      </span>
      <button style={{margin: '20px'}} onClick={handleDeleteTask}>ELIMINAR TAREA</button>
    </div>
  );
}

export default Task;
