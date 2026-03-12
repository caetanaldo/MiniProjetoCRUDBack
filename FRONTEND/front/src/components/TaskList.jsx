import { useState, useEffect } from "react";
import { api } from "../services/api";

export default function TaskList(){

    const [tasks, setTasks] = useState([])

    const loadTasks = async ()=>{
        const response = await api.get("/")
        setTasks(response.data)
    };

    useEffect(()=>{
        loadTasks();
    }, []);

    return(
        <div>
            {tasks.map((task) => (
                <div key={task.id} className="task">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <span className={`status ${task.completed ? "completed" : "pending"}`}>{task.completed ? "✔ Concluída" : "❌ Pendente"}</span>
                </div>
            ))}
        </div>
    )
}