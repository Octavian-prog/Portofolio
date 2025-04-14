import React, { useState, useEffect } from "react";
import "../Styles/ToDoApp.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [elapsedTimes, setElapsedTimes] = useState({}); // Stores the elapsed time for each task
// 
  const addTask = () => {
    if (input.trim()) {
      const newTask = {
        id: Date.now(),
        text: input,
        status: "to-do",
        startTime: Date.now(), // The moment the task is created
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: newStatus,
              endTime: newStatus === "done" ? Date.now() : undefined, // Sets the completion time
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setElapsedTimes((prev) => {
      const updatedTimes = { ...prev };
      delete updatedTimes[id];
      return updatedTimes;
    });
  };

  const calculateElapsedTime = (startTime, endTime) => {
    const now = endTime || Date.now(); // Use the current time if the task is not completed
    const elapsed = now - startTime; // Difference in milliseconds
    const seconds = Math.floor((elapsed / 1000) % 60);
    const minutes = Math.floor((elapsed / 1000 / 60) % 60);
    const hours = Math.floor(elapsed / 1000 / 60 / 60);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  // Updates the elapsed time periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimes = {};
      tasks.forEach((task) => {
        if (task.status !== "done") {
          updatedTimes[task.id] = calculateElapsedTime(task.startTime);
        }
      });
      setElapsedTimes(updatedTimes);
    }, 1000);

    return () => clearInterval(interval); // Clears the interval when the component is unmounted
  }, [tasks]);

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask(); // Adds the task when Enter is pressed
            }
          }}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todo-columns">
        {/* "To-Do" column */}
        <div className="todo-column">
          <h2>To-Do</h2>
          {tasks
            .filter((task) => task.status === "to-do")
            .map((task) => (
              <div key={task.id} className="todo-card">
                <p>{task.text}</p>
                <p>Time: {elapsedTimes[task.id] || "0h 0m 0s"}</p>
                <div className="card-actions">
                  <button onClick={() => moveTask(task.id, "in-progress")}>
                    In Progress
                  </button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </div>
            ))}
        </div>

        {/* "In Progress" column */}
        <div className="todo-column">
          <h2>In Progress</h2>
          {tasks
            .filter((task) => task.status === "in-progress")
            .map((task) => (
              <div key={task.id} className="todo-card">
                <p>{task.text}</p>
                <p>Time: {elapsedTimes[task.id] || "0h 0m 0s"}</p>
                <div className="card-actions">
                  <button onClick={() => moveTask(task.id, "done")}>
                    I did it!
                  </button>
                  <button onClick={() => moveTask(task.id, "to-do")}>
                    To do
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* "Done" column */}
        <div className="todo-column">
          <h2>Job done!</h2>
          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <div key={task.id} className="todo-card">
                <p>{task.text}</p>
                <p>
                  Time:{" "}
                  {calculateElapsedTime(task.startTime, task.endTime) ||
                    "0h 0m 0s"}
                </p>
                <div className="card-actions">
                  <button onClick={() => moveTask(task.id, "in-progress")}>
                    In Progress
                  </button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;