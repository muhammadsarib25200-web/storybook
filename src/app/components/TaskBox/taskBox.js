


"use client";

import { useState } from "react";
import "./taskBox.css";

export default function Taskbox({tasks}) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);


  const handleComplete = (tasks) => {
    if (completedTasks.includes(tasks)) {
      setCompletedTasks(
        completedTasks.filter((item) => item !== tasks)
      );
    } else {
      setCompletedTasks([...completedTasks, tasks]);
    }
  };

  if (selectedTask) {
    return (
      <div className="taskbox">
        <button onClick={() => setSelectedTask(null)}>
          ← Back
        </button>

        <h1>{selectedTask}</h1>

        <p>
          This is the detail view of {selectedTask}.
        </p>
      </div>
    );
  }

  return (
    <div className="taskbox">
      <h1>Taskbox</h1>

      {tasks.map((tasks) => {
        const isCompleted = completedTasks.includes(tasks);

        return (
          <div
            className={`task ${isCompleted ? "completed" : ""}`}
            key={tasks}
            onClick={() => setSelectedTask(tasks)}
          >
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => handleComplete(tasks)}
              onClick={(e) => e.stopPropagation()}
            />

            <span>{tasks}</span>
          </div>
        );
      })}
    </div>
  );
}