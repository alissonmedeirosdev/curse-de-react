import { useEffect, useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, isCompleted: !task.isCompleted };
      return task;
    });

    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);

    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    console.log(title, description);

    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    console.log(newTask);

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciar tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
