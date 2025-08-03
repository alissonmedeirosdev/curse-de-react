import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeedDetailsClick(task) {
    const query = new URLSearchParams();
    // Boa pratica
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => {
        return (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`${
                task.isCompleted && "line-through"
              } bg-slate-400 w-full text-white p-2 rounded-md text-left cursor-pointer`}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeedDetailsClick(task)}
              className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
            >
              <TrashIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
