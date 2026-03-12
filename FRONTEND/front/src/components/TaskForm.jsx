import { useState } from "react";
import { api } from "../services/api";

export default function TaskForm({loadTasks}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        await api.post("/", {
            title,
            description,
            completed: false
        })

        setTitle("")
        setDescription("")

        loadTasks()
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Título"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />

            <input
                placeholder="Descrição"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />

            <button>Criar Task</button>
        </form>
    )
}