import { useState } from "react";
import PropTypes from 'prop-types';

export default function Form({sendData}) {
    const [task, setTask] = useState({
        task_name: "",
        priority: ""
    });

    const handleSumbit = () => {
        sendData(task);
    }

    const handleChange = (event, field) => {
        setTask({
            ...task,
            [field]: event.target.value
        });
    }

    return (
        <>
            <div>
                <label>Task Name: </label>
                <input type="text" onChange={(event) => handleChange(event, "task_name")} />
            </div>
            <br />
            <div>
                <label>Priority: </label>
                <input type="range" min="1" max="3" onChange={(event) => handleChange(event, "priority")} />
                <div>
                    {task.priority === "1" && "Low"}
                    {task.priority === "2" && "Mid"}
                    {task.priority === "3" && "High"}
                </div>
            </div>
            <br />
            <button onClick={handleSumbit}>Add Task</button>
        </>
    )
}