import { useRef } from "react";

export function AddTask({ onAddTaskSubmit }) {
  const title = useRef("");
  const description = useRef("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
        placeholder="Digite o nome da tarefa"
        ref={title}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
        ref={description}
      />
      <button
        onClick={() => {
          // verificar se o title e o description estão preenchidos
          if (!title.current.value.trim() || !description.current.value.trim())
            return alert("Prencha os dados.");

          onAddTaskSubmit(title.current.value, description.current.value);
          title.current.value = "";
          description.current.value = "";
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}
