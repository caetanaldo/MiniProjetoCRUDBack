import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";
import { api } from "./services/api";
import "./App.css"

function App() {

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await api.get("/");
    setTasks(response.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tesques</h1>

      <TaskForm loadTasks={loadTasks} />

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;