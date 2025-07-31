import { ChevronRightIcon, TrashIcon } from "lucide-react";

export function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => {
        return (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`${
                task.isCompleted && "line-through"
              } bg-slate-400 w-full text-white p-2 rounded-md text-left`}
            >
              {task.title}
            </button>
            <button className="bg-slate-400 p-2 rounded-md text-white">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <TrashIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
