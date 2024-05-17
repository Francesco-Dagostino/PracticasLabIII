import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
    
  return (
    <div>
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;