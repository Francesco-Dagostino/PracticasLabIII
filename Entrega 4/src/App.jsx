import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);

  };

  const taskComplet = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className='App'>
      <h1>TAREAS PERSONALES!</h1>
      <h2>Agregue sus tareas a la lista.</h2>


      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={taskComplet}
        deleteTask={deleteTask}
      />

      <p>Al agregar una tarea puede Clickearla para marcarla como completada!</p>

    </div>
  );
}

export default App;
