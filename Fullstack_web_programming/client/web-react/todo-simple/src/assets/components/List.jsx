import { useState, useEffect } from "react";


export default function List({ task }) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    addTask(task);
  }, [task]);

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
    console.log(taskList);
  };

  return (
    <>
      <h2> Task List </h2>
      <ul>
        <h3>Task name – Priority</h3>
        {taskList.map((task, index) => (
          <li key={index}>
            {task.task_name} - {task.priority}
          </li>
        ))}
      </ul>
    </>
  );
}
