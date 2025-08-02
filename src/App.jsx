import { useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Comprar mantimentos",
      description: "Leite, pão, ovos e café",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar React",
      description: "Revisar hooks e componentes funcionais",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Enviar relatório",
      description: "Relatório mensal de desempenho para o chefe",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Fazer caminhada",
      description: "30 minutos de caminhada no fim da tarde",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Fazer caminhada",
      description: "30 minutos de caminhada no fim da tarde",
      isCompleted: false,
    },
    {
      id: 6,
      title: "Fazer caminhada",
      description: "30 minutos de caminhada no fim da tarde",
      isCompleted: false,
    },
  ]);

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
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

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
