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
      isCompleted: true,
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
      isCompleted: true,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, isCompleted: !task.isCompleted };
    });

    return task;
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciar tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
