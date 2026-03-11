import { useState, useEffect } from "react";
import { api } from "../services/api";

export default function TaskList(){

    const [tasks, setTasks] = useState([])

    const loadTasks = async ()=>{
        const response = await api.get("/")
        setTasks(response.data)
    }
}