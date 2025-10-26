import { useState } from "react";

import Button from "@/components/Button";

function Todo() {
    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) ?? [];
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTasks = [
            ...tasks,
            {
                name: taskName,
                isCompleted: false,
            },
        ];

        setTasks(newTasks);
        setTaskName("");

        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    console.log("re-render");

    return (
        <div>
            <h1>Todo</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter task name..."
                    value={taskName}
                    onChange={(e) => {
                        setTaskName(e.target.value);
                    }}
                />
                <Button type="submit">Add</Button>
            </form>
            {tasks.length ? (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No data</p>
            )}
        </div>
    );
}

export default Todo;
